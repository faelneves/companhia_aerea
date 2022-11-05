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
			const voo = this.vooService.createVoo(request.body as IVoo);
			response.status(201).send({ voo });
		} catch (error: any) {
			response.status(400).send({ error: error.message });
		}
	};

	listVoo: RequestHandler = (request, response) => {
		try {
			const voos = this.vooService.listVoo(request.query as IFilterVoo);
			response.status(200).send({ voos: voos });
		} catch (error: any) {
			response.status(400).send({ error: error.message });
		}
	};

	getVoo: RequestHandler = (request, response) => {
		try {
			const vooId = request.params.id;
			const voo = this.vooService.getVooById(vooId);
			response.status(200).send({ voo });
		} catch (error: any) {
			response.status(400).send({ error: error.message });
		}
	};

	changeStatus: RequestHandler = (request, response) => {
		try {
			const vooId = request.params.id;
			const status = request.body.status;
			const voo = this.vooService.changeStatus(vooId, status);
			response.status(200).send({ voo });
		} catch (error: any) {
			response.status(400).send({ error: error.message });
		}
	};
	getPassengerBy: RequestHandler = (request, response) => {
		try {
			const pessoaName = request.params?.name
			const pessoaCpf = request.params?.cpf
			const passageiro = this.vooService.getPassengerBy(pessoaName, pessoaCpf);
		} catch (error: any) {
			response.status(400).send({ error: error.message });
		}
	}
}
