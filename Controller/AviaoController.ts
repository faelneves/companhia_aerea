import { RequestHandler } from "express";
import { IAviao } from "../Interfaces/IAviao";
import { IAviaoService } from "../Service/IAviaoService";

export default class AviaoController {
  private aviaoService: IAviaoService;
  constructor(aviaoService: IAviaoService) {
    this.aviaoService = aviaoService;
  }
  createAviao: RequestHandler = (request, response) => {
    try {
      const aviao = this.aviaoService.createAviao(request.body as IAviao);
      response.status(201).send(aviao);
    } catch (error: any) {
      response.status(400).send({ error: error.message });
    }
  };
  getVoo: RequestHandler = (request, response) => {
    try {
      const aviaoId = request.params.id;
      const aviao = this.aviaoService.getAviaoById(aviaoId);
      response.status(200).send(aviao);
    } catch (error: any) {
      response.status(400).send({ error: error.message });
    }
  };
}
