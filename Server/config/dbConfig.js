import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envpath = path.resolve(__dirname, "../.env");
dotenv.config({ path: envpath });

export const config = {
  user: process.env.dbuser,
  host: process.env.dbhost,
  database: process.env.db,
  password: process.env.dbpwd,
  port: process.env.port,
};
