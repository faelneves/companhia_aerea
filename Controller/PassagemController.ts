// import { RequestHandler } from "express";
// import { IFilterPessoa, IPessoa } from "../Interfaces/IPessoa";
// import { IPessoaService } from "../Service/IPessoaService";

// export default class PassagemController {
//   private pessoaService: IPassagemService;
//   constructor(pessoaService: IPassagemService) {
//     this.pessoaService = pessoaService;
//   }

//   createPerson: RequestHandler = (request, response) => {
//     try {
//       const person = this.pessoaService.createPerson(request.body as IPessoa);
//       response.status(201).send({ person });
//     } catch (error: any) {
//       response.status(400).send({ error: error.message });
//     }
//   };

//   listPerson: RequestHandler = (request, response) => {
//     try {
//       const persons = this.pessoaService.listPerson(
//         request.query as IFilterPessoa
//       );
//       response.status(200).send({ pessoas: persons });
//     } catch (error: any) {
//       response.status(400).send({ error: error.message });
//     }
//   };
// }
