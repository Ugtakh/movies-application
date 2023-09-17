import dotenv = require("dotenv");
dotenv.config();
import express = require("express");
import { Request, Response } from "express";
const cors = require("cors");
import connectDB from "./config/db";

import movieRoutes from "./routes/movieRoutes";
import chatBotRoute from "./routes/chatBotRoutes";

const app = express();
app.use(cors());

const MONGO_URI = process.env.MONGO_URI || "";

app.use("/movies", movieRoutes);
app.use("/webhook", chatBotRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express - CHATBOT");
});

connectDB(MONGO_URI);
app.listen(8000, () => {
  console.log("🖥️ Server is running at 8000 port");
});
