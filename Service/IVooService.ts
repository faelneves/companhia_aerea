import { IFilterVoo, IVoo, Status } from "../Interfaces/IVoo";

export interface IVooService {
  createVoo(voo: IVoo);
  listVoo(params: IFilterVoo);
  getVooById(id: string);
  changeStatus(id: string, status: Status);
}
