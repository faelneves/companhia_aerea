import { IAviao } from "../Interfaces/IAviao";
import { IAviaoRepository } from "../Repository/IAviaoRepository";

export default class AviaoService {
  private aviaoRepository: IAviaoRepository;
  constructor(aviaoRepository: IAviaoRepository) {
    this.aviaoRepository = aviaoRepository;
  }
  createAviao(aviao: IAviao) {
    return this.aviaoRepository.createAirplane(aviao);
  }
  getAviaoById(id: string) {
    return this.aviaoRepository.getAviaoById(id);
  }
}
