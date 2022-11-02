import { IFilterVoo, IVoo } from "../Interfaces/IVoo";
import { IVooRepository } from "../Repository/IVooRepository";

export default class VooService {
  private vooRepository: IVooRepository;
  constructor(vooRepository: IVooRepository) {
    this.vooRepository = vooRepository;
  }
  createVoo(voo: IVoo) {
    this.vooRepository.createVoo(voo);
  }
  listVoo(params: IFilterVoo) {
    return this.vooRepository.filterVoo(params);
  }
}
