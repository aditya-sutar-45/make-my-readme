import { catchAsync } from "../utils/catchAsync.js";
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTIONS } from "../config/gemini_system_instructions.js";

export const generateReadme = catchAsync(async (req, res) => {
  const { userPrompt } = req.body;

  if (!userPrompt) throw new ExpressError("prompt is empty!");
  if (userPrompt.length < 25)
    throw new ExpressError("prompt lenght too small!");
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API });
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
  res.setHeader("Access-Control-Allow-Origin", "*");

  for await (const chunk of response) {
    res.write(chunk.text);
  }

  res.end();
});
