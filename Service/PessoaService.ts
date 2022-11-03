import { IPessoa } from "../Interfaces/IPessoa";
import { IPessoaRepository } from "../Repository/IPessoaRepository";

export default class PessoaService {
  private pessoaRepository: IPessoaRepository;
  constructor(pessoaRepository: IPessoaRepository) {
    this.pessoaRepository = pessoaRepository;
  }
  createPerson(pessoa: IPessoa): IPessoa {
    return this.pessoaRepository.createPerson(pessoa);
  }
}
