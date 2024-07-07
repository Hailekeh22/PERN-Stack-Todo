import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
  })
);
app.use(bodyParser.json());

const port = process.env.server_port;

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
