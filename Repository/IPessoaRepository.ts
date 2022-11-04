import { IFilterPessoa, IPessoa } from "../Interfaces/IPessoa";

export interface IPessoaRepository {
  createPerson(pessoa: IPessoa): IPessoa;
  listPerson(pessoaFilter: IFilterPessoa): Array<IPessoa>;
}
