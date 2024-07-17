import { accessdb, insertodo, deletetodo } from "../Service/Database.js";

export const fetchTodos = async (req, res) => {
  const data = await accessdb();
  res.json(data);
};

export const addTodos = async (req, res) => {
  const todoValue = req.body.newtodo;
  const add = await insertodo(todoValue);
  if (add) {
    const data = await accessdb();
    res.json(data);
  } else {
    console.log("Can Not Add to the database");
    return "error";
  }
};

export const delteTodos = async (req, res) => {
  const name = req.body.name;
  const deleteTodoItem = await deletetodo(name);
  if (deleteTodoItem) {
    const data = await accessdb();
    res.json(data);
  } else {
    console.log("can't delete ");
    return "error";
  }
};
