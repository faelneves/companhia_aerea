import { RequestHandler } from "express";
import { IFilterVoo, IVoo } from "../Interfaces/IVoo";
import { IVooService } from "../Service/IVooService";

export default class VooController {
  private vooService: IVooService;
  constructor(vooService: IVooService) {
    this.vooService = vooService;
  }

  createVoo: RequestHandler = (request, response) => {
    try {
      this.vooService.createVoo(request.body as IVoo);
      response.status(201).send();
    } catch (error: any) {
      response.status(400).send({ error: error.message });
    }
  };

  listVoo: RequestHandler = (request, response) => {
    try {
      let voos = this.vooService.listVoo(request.query as IFilterVoo);
      response.status(200).send({ voos: voos });
    } catch (error: any) {
      response.status(400).send({ error: error.message });
    }
  };
}
