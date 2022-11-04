import { IPessoaService } from "../Service/IPessoaService";
import PessoaServiceFactory from "./PessoaServiceFactory";
import PessoaController from "../Controller/PessoaController";

export default class PessoaControllerFactory {
  static make(pessoaService?: IPessoaService) {
    const pessoaServiceInstance = pessoaService || PessoaServiceFactory.make();
    return new PessoaController(pessoaServiceInstance);
  }
}
