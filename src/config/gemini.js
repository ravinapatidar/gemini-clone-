// const apiKey = "AIzaSyDSviq2zGC8ZTC98_qEQw9ZvaSua4XFtg4";



// node --version # Should be >= 18
// npm install @google/generative-ai

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyDSviq2zGC8ZTC98_qEQw9ZvaSua4XFtg4",
  });
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-2.5-pro';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  // return response.text();
  //let fileIndex = 0;
 let finalText = "";

  for await (const chunk of response) {
    finalText += chunk.text;
  }

  return finalText; // ✅ Return the full result
}
export default main;
