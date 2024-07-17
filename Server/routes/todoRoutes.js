import express from "express";
import {
  fetchTodos,
  addTodos,
  delteTodos,
} from "../controllers/todoControllers.js";

export const indexRoute = express.Router();
export const addRoute = express.Router();
export const deleteRoute = express.Router();

indexRoute.get("/lists", fetchTodos);
addRoute.post("/addtodo", addTodos);
deleteRoute.post("/delete", delteTodos);
