import PessoaService from "../Service/PessoaService";
import PessoaRepository from "../Repository/PessoaRepository";
import { IPessoaRepository } from "../Repository/IPessoaRepository";

export default class PessoaServiceFactory {
  static make(pessoaRepository?: IPessoaRepository) {
    const pessoaRepositoryInstance = pessoaRepository || new PessoaRepository();
    return new PessoaService(pessoaRepositoryInstance);
  }
}
