import { IAviao } from "../Interfaces/IAviao";

const avioes: Array<IAviao> = [];

export default class AviaoRepository {
  createAirplane(aviao: IAviao): IAviao {
    avioes.push(aviao);
    return aviao;
  }

  getAviaoById(id: string): IAviao {
    let aviao = avioes.filter((aviao) => aviao.id == id);
    if (aviao.length == 0) {
      throw new Error("Avião não encontrado");
    }
    return aviao[0];
  }
}
