import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt"; // serve para criptografar senha
import jwt from "jsonwebtoken"; // criar e validar tokens JWT
import dotenv from "dotenv"; // Ambiente com arquivo .env

dotenv.config(); // Carregar as variaveis de ambiente do arquivo .ENV

const app = express();

app.use(express.json());

// rota aberta
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo a nossa API! " });
});

// Credenciais
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@projeto-api.veajh.mongodb.net/?retryWrites=true&w=majority&appName=PROJETO-API`
  )
  .then(() => {
    app.listen(3000);
    console.log("Conectou ao Banco!");
  })
  .catch((err) => console.log(err));
