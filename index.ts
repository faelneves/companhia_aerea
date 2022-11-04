import VooControllerFactory from "./Factories/VooControllerFactory";
import express from "express";
import dotenv from "dotenv";
import PessoaControllerFactory from "./Factories/PessoaControllerFactory";
import AviaoControllerFactory from "./Factories/AviaoControllerFactory";

dotenv.config();

const app = express();

app.use(express.json());

const vooController = VooControllerFactory.make();
const pessoaController = PessoaControllerFactory.make();
const aviaoController = AviaoControllerFactory.make();

app.get("/", (req, res) => {
  res.send("Comapania Aerea");
});

app.post("/voo/create", vooController.createVoo);
app.get("/voo/list", vooController.listVoo);
app.get("/voo/get/:id", vooController.getVoo);
app.patch("/voo/changeStatus/:id", vooController.changeStatus);

app.post("/pessoa/create", pessoaController.createPerson);
app.get("/pessoa/list", pessoaController.listPerson);

app.post("/aviao/create", aviaoController.createAviao);
app.get("/aviao/get/:id", aviaoController.getVoo);

app.listen(process.env.PORT);

console.log(`aplicação roando na porta ${process.env.PORT}`);
