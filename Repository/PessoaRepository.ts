import { IFilterPessoa, IPessoa } from "../Interfaces/IPessoa";

const pessoas: Array<IPessoa> = [];

export default class VooRepository {
  createPerson(pessoa: IPessoa): IPessoa {
    pessoas.push(pessoa);
    return pessoa;
  }
  listPerson(pessoaFilter: IFilterPessoa): Array<IPessoa> {
    return pessoas.filter((person) => {
      if (pessoaFilter?.nome && !person.nome.includes(pessoaFilter.nome))
        return false;
      if (pessoaFilter?.cpf && person.cpf != pessoaFilter.cpf) return false;
      return true;
    });
  }
}
