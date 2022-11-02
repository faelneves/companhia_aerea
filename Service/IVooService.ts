import { IFilterVoo, IVoo } from "../Interfaces/IVoo";

export interface IVooService {
  createVoo(voo: IVoo);
  listVoo(params: IFilterVoo);
}
