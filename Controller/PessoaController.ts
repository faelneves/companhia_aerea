import { IPessoaService } from "../Service/IPessoaService";

export default class PessoaController {
  private pessoaService: IPessoaService;
  constructor(pessoaService: IPessoaService) {
    this.pessoaService = pessoaService;
  }
}
