


import { GoogleGenerativeAI,HarmBlockThreshold,HarmCategory } from "@google/generative-ai";

const safetySetting = [
    {
        category: HarmCategory.HARM_CATEGORY_HARRASSEMENT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    }
]

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_PUBLIC_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" , safetySetting, });

export default model