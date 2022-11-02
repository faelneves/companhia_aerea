import ExchangeControllerFactory from "./factories/ExchangeControllerFactory.js";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const exchangeController = ExchangeControllerFactory.make();

app.get("/", (req, res) => {
  res.send("Comapania Aerea");
});

app.get("/realtodolar/:amount", exchangeController.realToDollar);

app.listen(process.env.PORT);
