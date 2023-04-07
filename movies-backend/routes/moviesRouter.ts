import { Router } from "express";
import { getMovie, getMovies } from "../controllers/moviesController";

const router = Router();

router.route("/").get(getMovies);
router.route("/:id").get(getMovie);
export default router;