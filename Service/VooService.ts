import { IFilterVoo, IVoo, Status } from "../Interfaces/IVoo";
import { IVooRepository } from "../Repository/IVooRepository";

export default class VooService {
  private vooRepository: IVooRepository;
  constructor(vooRepository: IVooRepository) {
    this.vooRepository = vooRepository;
  }
  createVoo(voo: IVoo) {
    if (voo.origem.cidade == voo.destino.cidade) {
      throw new Error("a origem não poder ser igual ao destino");
    }
    if (!voo.ocupacao) {
      voo.ocupacao = 0;
    }
    return this.vooRepository.createVoo(voo);
  }
  listVoo(params: IFilterVoo) {
    return this.vooRepository.filterVoo(params);
  }
  getVooById(id: string) {
    return this.vooRepository.getVooById(id);
  }
  changeStatus(id: string, status: Status) {
    if (!status) {
      throw new Error("status invalido");
    }
    return this.vooRepository.changeStatus(id, status);
  }
}
