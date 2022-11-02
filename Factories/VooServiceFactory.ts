import VooService from "../Service/VooService";
import VooRepository from "../Repository/VooRepository";
import { IVooRepository } from "../Repository/IVooRepository";

export default class ExchangeServiceFactory {
  static make(vooRepository?: IVooRepository) {
    const vooRepositoryInstance = vooRepository || new VooRepository();
    return new VooService(vooRepositoryInstance);
  }
}
