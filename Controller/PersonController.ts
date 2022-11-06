import { RequestHandler } from "express";
import { IFilterPerson, IPerson } from "../Interfaces/IPerson";
import { IPersonService } from "../Service/IPersonService";

export default class PersonController {
  private personService: IPersonService;
  constructor(personService: IPersonService) {
    this.personService = personService;
  }

  createPerson: RequestHandler = (request, response) => {
    try {
      const person = this.personService.createPerson(request.body as IPerson);
      response.status(201).send({ person });
    } catch (error: any) {
      response.status(400).send({ error: error.message });
    }
  };

  listPerson: RequestHandler = (request, response) => {
    try {
      const persons = this.personService.listPerson(
        request.query as IFilterPerson
      );
      response.status(200).send({ persons: persons });
    } catch (error: any) {
      response.status(400).send({ error: error.message });
    }
  };
}
