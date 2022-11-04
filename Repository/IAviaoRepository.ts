import { IAviao } from "../Interfaces/IAviao";

export interface IAviaoRepository {
  createAirplane(aviao: IAviao): IAviao;
  getAviaoById(id: string): IAviao;
}
