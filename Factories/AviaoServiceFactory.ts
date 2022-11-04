import { IAviaoRepository } from "../Repository/IAviaoRepository";
import AviaoRepository from "../Repository/AviaoRepository";
import AviaoService from "../Service/AviaoService";

export default class AviaoServiceFactory {
  static make(aviaoRepository?: IAviaoRepository) {
    const aviaoRepositoryInstance = aviaoRepository || new AviaoRepository();
    return new AviaoService(aviaoRepositoryInstance);
  }
}
