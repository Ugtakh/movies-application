import { Request, Response } from "express";
import Movie from "../model/Movie";

const getMovies = async (req: Request, res: Response) => {
  console.log(req)
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
  const page = req.query.page ? parseInt(req.query.page as string) : 1;
  const total = await Movie.countDocuments();
  const pageCount = Math.ceil(total / limit);
  const skip = (page - 1) * limit;
  console.log("limit", limit, "page", page, "total", total, "pageCount", pageCount, "skip", skip)
  const movies = await Movie.find({ poster: { $exists: true } }).skip(skip).limit(limit)
  res.status(200).json({ success: true, movies , pagination: { page, pageCount, limit, total }});
};

const getMovie = async (req: Request, res: Response) => {
  const movie = await Movie.findOne({ _id: req.params.id }).limit(1);
  res.status(200).send(movie);
};

export { getMovies, getMovie};
