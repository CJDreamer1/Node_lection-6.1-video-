import path from "node:path";

export const SORT_ORDER = {
  ASC: "asc",
  DESC: "desc",
};

export const ACCESS_TOKEN_TTL = 15 * 60 * 1000; //TTL - time to live час життя токену в мілісекундах (15min)
export const REFRESH_TOKEN_TTL = 24 * 60 * 60 * 1000; // (1 day)

export const SMTP = {
  HOST: process.env.SMTP_HOST,
  PORT: process.env.SMTP_PORT,
  USER: process.env.SMTP_USER,
  PASSWORD: process.env.SMTP_PASSWORD,
  FROM_EMAIL: process.env.SMTP_FROM_EMAIL,
};

export const TEMPLATE_DIR = path.resolve("src", "templates");

export const CLOUDINARY = {
  CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  API_KEY: process.env.CLOUDINARY_API_KEY,
  API_SECRET: process.env.CLOUDINARY_API_SECRET,
};
