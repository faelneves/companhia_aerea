import { IPessoa } from "../Interfaces/IPessoa";

const pessoas: Array<IPessoa> = [];

export default class VooRepository {
  createPerson(pessoa: IPessoa): IPessoa {
    pessoas.push(pessoa);
    return pessoa;
  }
}
