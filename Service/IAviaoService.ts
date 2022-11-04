import { IAviao } from "../Interfaces/IAviao";

export interface IAviaoService {
  createAviao(aviao: IAviao);
  getAviaoById(id: string);
}
