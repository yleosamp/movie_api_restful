import { Request, Response } from "express";

// Model
import { MovieModel } from "../models/Movie";

// Logger
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (err: any) {
    Logger.error(`Erro no sistema: ${err.message}`);
    return res
      .status(500)
      .json({ error: "Por favor, tente novamente mais tarde." });
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    return res.status(200).json(movie);
  } catch (err: any) {
    Logger.error(`Erro no sistema: ${err.message}`);
    return res.status(404).json({ error: "Filme não encontrado!" });
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();
    return res.status(200).json(movies);
  } catch (err: any) {
    Logger.error(`Erro no sistema: ${err.message}`);
    return res
      .status(500)
      .json({ error: "Por favor, tente novamente mais tarde." });
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie: any = await MovieModel.findById(id);

    await movie.deleteOne();
    return res.status(200).json({ msg: "Filme removido com sucesso!" });
  } catch (err: any) {
    Logger.error(`Erro no sistema: ${err.message}`);
    return res.status(404).json({ error: "O filme não existe." });
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;
    const movie: any = await MovieModel.findById(id);

    await MovieModel.updateOne({ _id: id }, data);

    return res.status(200).json({ msg: "Filme atualizado com sucesso!" });
  } catch (err: any) {
    Logger.error(`Erro no sistema: ${err.message}`);
    return res.status(404).json({ error: "O filme não existe." });
  }
}
