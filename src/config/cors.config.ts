import { CLIENT_URL } from "src/constants";

export const corsConfig = {
  origin: CLIENT_URL,
  credentials: true,
  exposedHeaders: 'set-cookie',
}