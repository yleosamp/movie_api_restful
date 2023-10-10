import { Router, Request, Response } from "express";
import {
  createMovie,
  findMovieById,
  getAllMovies,
  removeMovie,
  updateMovie,
} from "./controllers/movieControllers";
const router = Router();

// Validations
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working!");
  })
  .post("/movie", movieCreateValidation(), validate, createMovie)
  .get("/movie/:id", findMovieById)
  .get("/movie", getAllMovies)
  .delete("/movie/:id", removeMovie)
  .patch("/movie/:id", movieCreateValidation(), validate, updateMovie);
