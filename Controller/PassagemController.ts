import { RequestHandler } from "express";
import { IPassagem } from "../Interfaces/IPassagem";
import { IPassagemService } from "../Service/IPassagemService"

export default class PassagemController {
	private passagemService: IPassagemService;
	constructor(passagemService: IPassagemService) {
		this.passagemService = passagemService;
	}
	emitPassagem: RequestHandler = (request, response) => {
		try {
			const passagem = this.passagemService.emitPassagem(request.body as IPassagem);
			response.status(201).send({ passagem });
		} catch (error: any) {
			response.status(400).send({ error: error.message })
		}
	}

}
