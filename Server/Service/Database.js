import pg from "pg";
import { config } from "../config/dbConfig.js";

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

export const deletetodo = async (value) => {
  const db = new pg.Client(config);

  try {
    await db.connect();
    const query = "DELETE FROM todos WHERE todoitems = $1";
    const toremove = [value];
    await db.query(query, toremove);
    return "sucess";
  } catch (e) {
    console.log(e);
  } finally {
    await db.end();
  }
};
