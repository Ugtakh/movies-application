import { Request, Response } from "express";
import Movie from "../model/Movie";

const getMovies = async (req: Request, res: Response) => {
  const movies = await Movie.find().limit(10);
  res.status(200).json({ success: true, movies });
};

export { getMovies };
