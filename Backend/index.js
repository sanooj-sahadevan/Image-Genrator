import express from "express";
import cors from "cors";
import { connectToMongoDB } from "./config/config.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = 8000;

connectToMongoDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev")); 

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});



app.listen(PORT, () => {
  console.log(`Server started running on http://localhost:${PORT}/`);
});
