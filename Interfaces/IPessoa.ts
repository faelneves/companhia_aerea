export interface IPessoa {
  nome: string;
  dtNasc: Date;
  cpf: string;
}

export interface IFilterPessoa {
  nome?: string;
  cpf?: string;
}
