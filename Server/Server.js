import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { accessdb, insertodo } from "./Service/Database.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.server_port;

app.get("/lists", async (req, res) => {
  const data = await accessdb();
  console.log("endpoint accessed");
  res.json(data);
});

app.post("/addtodo", async (req, res) => {
  const todoValue = req.body.newtodo;
  const add = await insertodo(todoValue);
  if (add) {
    const data = await accessdb();
    res.json(data);
  } else {
    console.log("Can Not Add to the database");
    return "error";
  }
});

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
