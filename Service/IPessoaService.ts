import { IFilterPessoa, IPessoa } from "../Interfaces/IPessoa";

export interface IPessoaService {
  createPerson(pessoa: IPessoa);
  listPerson(pessoaFilter: IFilterPessoa);
}
