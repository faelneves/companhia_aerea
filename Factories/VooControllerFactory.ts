import VooServiceFactory from "./VooServiceFactory";
import VooController from "../Controller/VooController";
import { IVooService } from "../Service/IVooService";

export default class VooControllerFactory {
  static make(vooService?: IVooService) {
    const vooServiceInstance = vooService || VooServiceFactory.make();
    return new VooController(vooServiceInstance);
  }
}
