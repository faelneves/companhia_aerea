import { IFilterVoo, IVoo, Status } from "../Interfaces/IVoo";
import { IVooRepository } from "./IVooRepository";

const voos: Array<IVoo> = [];

export default class VooRepository implements IVooRepository {
  createVoo(voo: IVoo): boolean {
    console.log(voo);
    voos.push(voo);
    return true;
  }

  filterVoo(params: IFilterVoo): Array<IVoo> {
    return voos.filter((voo) => {
      if (params?.destino && params.destino.cidade != voo.destino.cidade)
        return false;
      if (params?.origem && params.origem.cidade != voo.origem.cidade)
        return false;
      if (params?.status && params.status != voo.status) return false;
      if (
        params?.partida &&
        params.partida.toLocaleDateString() != voo.partida.toLocaleDateString()
      )
        return false;
      return true;
    });
  }

  getVooById(id: string): IVoo {
    let voo = voos.filter((voo) => voo.id == id);
    if (voo.length == 0) {
      throw new Error("Voo não encontrado");
    }
    return voo[0];
  }

  changeStatus(id: string, status: Status): IVoo {
    let vooIndex = voos.findIndex((voo) => voo.id == id);
    if (vooIndex == -1) {
      throw new Error("Voo não encontrado");
    }
    voos[vooIndex].status = status;
    return voos[vooIndex];
  }
}
