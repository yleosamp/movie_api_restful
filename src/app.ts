// ENV Variables
require("dotenv").config();

import express from "express";
import config from "config";

const app = express();

// JSON Middleware
app.use(express.json());

// Banco de Dados
import db from "../config/db";

// Routes
import router from "./router";

// Logger
import Logger from "../config/logger";

// Middlewares
import morganMiddleware from "./middleware/morganMiddleware";
app.use(morganMiddleware);

app.use("/api/", router);

// APP Port
const port = config.get<number>("port");

// Listen
app.listen(port, async () => {
  await db();
  Logger.info(`A aplicação está ligada na porta: ${port}`);
});
