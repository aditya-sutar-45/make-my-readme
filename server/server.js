import express, { json } from "express";
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import { SYSTEM_INSTRUCTIONS } from "./config/gemini_system_instructions.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(json());

app.get("/", (req, res) => {
  res.send("hello world!!");
});

app.post("/generate-readme", async(req, res) => {
    const {userPrompt} = req.body;

    const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API});
    const formatedPrompt = `
    The user has described their project as follows: 

    """
    ${userPrompt}
    """

    Based on this, generate a complete and well formated README.md file in Markdown format.
  `;

  const response = await ai.models.generateContentStream({
    model: "gemini-2.5-flash",
    contents: formatedPrompt,
    config: {
      systemInstruction: SYSTEM_INSTRUCTIONS,
      temperature: 0.3,
    },
  });

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache");

  for await (const chunk of response) {
    res.write(chunk.text);
  }

  res.end();
});

app.listen(PORT, () => {
  console.log("server running on port:", PORT);
  console.log(`http://localhost:${PORT}/`);
});
