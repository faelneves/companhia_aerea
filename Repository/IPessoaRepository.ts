import { IPessoa } from "../Interfaces/IPessoa";

export interface IPessoaRepository {
  createPerson(pessoa: IPessoa): IPessoa;
}
