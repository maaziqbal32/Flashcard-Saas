import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const systemPrompt = `
You're a flashcard Creator. Your task is to generate concise and effective flashcards based on the given topic or content. Follow these guidelines:
...
Return in the following JSON format:
{
  "flashcards": [
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`;

export async function POST(req) {
  try {
    const data = await req.text();
    const genAI = new GoogleGenerativeAI({ apiKey: process.env.API_KEY });

    const completion = await genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      systemInstruction: systemPrompt,
    }).generateContent(data);

    const responseText = completion.response.candidates[0].content.parts[0].text;
    const cleanText = responseText.replace(/```json\n/g, "").replace(/```/g, "");
    const flashcards = JSON.parse(cleanText);

    return NextResponse.json(flashcards.flashcards);
  } catch (error) {
    console.error("Error generating flashcards:", error);
    return NextResponse.json(
      { error: 'Error generating flashcards: ' + error.message },
      { status: 500 }
    );
  }
}
