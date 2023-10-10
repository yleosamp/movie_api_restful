import mongoose from "mongoose";
import config from "config";
// Logger
import Logger from "../config/logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectou ao banco de dados!");
  } catch (err) {
    Logger.error("Não foi possível conectar ao MongoDB");
    Logger.error("Erro: " + err);
    process.exit(1);
  }
}

export default connect;
