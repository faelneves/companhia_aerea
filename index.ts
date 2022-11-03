import VooControllerFactory from "./Factories/VooControllerFactory";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const vooController = VooControllerFactory.make();

app.get("/", (req, res) => {
  res.send("Comapania Aerea");
});

app.post("/voo/create", vooController.createVoo);
app.get("/voo/list", vooController.listVoo);
app.get("/voo/get/:id", vooController.getVoo);
app.patch("/voo/changeStatus/:id", vooController.changeStatus);

app.listen(process.env.PORT);

console.log(`aplicação roando na porta ${process.env.PORT}`);
