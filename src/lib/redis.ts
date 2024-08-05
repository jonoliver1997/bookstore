import { Redis } from "@upstash/redis";
import { url } from "inspector";

export const redis = new Redis({
  url: process.env.REDIS_URL!,
  token: process.env.REDIS_SECRET!,
});
