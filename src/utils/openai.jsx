import OpenAI from "openai";
import { OPENAI_KEY } from "./constant";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default client;
