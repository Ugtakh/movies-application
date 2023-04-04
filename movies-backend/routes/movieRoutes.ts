import { Router } from "express";
import { getMovies } from "../controllers/moviesController";

const router = Router();

router.route("/").get(getMovies);

export default router;
