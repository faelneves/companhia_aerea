import { IPessoa } from "../Interfaces/IPessoa";

export interface IPessoaService {
  createPerson(pessoa: IPessoa);
}
