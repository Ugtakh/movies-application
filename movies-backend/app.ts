import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db";

import movieRoutes from "./routes/movieRoutes";

const app = express();
app.use(cors());

const MONGO_URI = process.env.MONGO_URI || "";

app.use("/movies", movieRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express - TS");
});

connectDB(MONGO_URI);
app.listen(8000, () => {
  console.log("🖥️ Server is running at 8000 port");
});
