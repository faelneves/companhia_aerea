import AviaoController from "../Controller/AviaoController";
import { IAviaoService } from "../Service/IAviaoService";
import AviaoServiceFactory from "./AviaoServiceFactory";

export default class AviaoControllerFactory {
  static make(aviaoService?: IAviaoService) {
    const aviaoServiceInstance = aviaoService || AviaoServiceFactory.make();
    return new AviaoController(aviaoServiceInstance);
  }
}
