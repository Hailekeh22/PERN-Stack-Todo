import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { indexRoute, addRoute, deleteRoute } from "./routes/todoRoutes.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use("/", indexRoute);
app.use("/", addRoute);
app.use("/", deleteRoute);

const port = process.env.server_port;

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
