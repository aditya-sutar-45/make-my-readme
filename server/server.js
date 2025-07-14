import express, { json } from "express";
import { ExpressError } from "./utils/ExpressError.js";
import "dotenv/config";
import { generateReadme } from "./controllers/generateReadme.js";
import cors from "cors";
import { catchAsync } from "./utils/catchAsync.js";
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTIONS_ENHANCE } from "./config/gemini_system_instructions.js";

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://make-my-readme.onrender.com",
//       "https://make-my-readme.vercel.app/",
//     ],
//     credentials: true,
//   })
// );
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("hello world!!");
});

app.post("/generate-readme", generateReadme);
app.post(
  "/enhance-readme",
  catchAsync(async (req, res) => {
    const { userPrompt, readmeMarkdown } = req.body;
    if (!userPrompt) throw new ExpressError("prompt is empty!");
    if (!readmeMarkdown) throw new ExpressError("readme is empty!");
    if (userPrompt.length < 25)
      throw new ExpressError("prompt lenght too small!");

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API });
    const formatedPrompt = `
    Make sure to preserve the original content wherever appropriate, and expand upon it by adding more details, examples, and explanations where necessary. 
    Using this information, intelligently enhance the following README.md file. Maintain the existing Markdown formatting style and structure.
    
    Only return the improved Markdown content — no extra commentary or explanations.

    ### User Instructions:
    """
    ${userPrompt}
    """

    ### Existing README:
    """
    ${readmeMarkdown}
    """
    `;

    const response = await ai.models.generateContentStream({
      model: "gemini-2.5-flash",
      contents: formatedPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTIONS_ENHANCE,
        temperature: 0.3,
      },
    });

    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    });

    for await (const chunk of response) {
      res.write(chunk.text);
    }

    res.end();
  })
);

app.all(/(.*)/, (req, res, next) => {
  next(new ExpressError("Route does not exist!", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "something went wrong!" } = err;
  res.status(statusCode).send(message);
});

app.listen(PORT, () => {
  console.log("server running on port:", PORT);
  console.log(`http://localhost:${PORT}/`);
});
