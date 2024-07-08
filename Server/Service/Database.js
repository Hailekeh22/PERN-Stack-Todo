import pg from "pg";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envpath = path.resolve(__dirname, "../.env");
dotenv.config({ path: envpath });

const config = {
  user: process.env.dbuser,
  host: process.env.dbhost,
  database: process.env.db,
  password: process.env.dbpwd,
  port: process.env.port,
};

export const accessdb = async () => {
  const db = new pg.Client(config);
  try {
    await db.connect();
    const result = await db.query("Select * from todos");
    return result.rows;
  } catch (e) {
    console.log(e);
  } finally {
    await db.end();
  }
};

export const insertodo = async (value) => {
  const db = new pg.Client(config);

  try {
    await db.connect();
    const query = "INSERT INTO todos (userid,todoitems) VALUES ($1,$2)";
    const newTodo = [1, value];
    await db.query(query, newTodo);
    return "Sucessfuly added";
  } catch (e) {
    console.log(e);
  } finally {
    await db.end();
  }
};
