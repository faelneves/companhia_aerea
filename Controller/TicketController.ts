import { RequestHandler } from "express";
import { ITicket } from "../Interfaces/ITicket";
import { ITicketService } from "../Service/ITicketService"

export default class TicketController {
	private ticketService: ITicketService;
	constructor(ticketService: ITicketService) {
		this.ticketService = ticketService;
	}
	emitTicket: RequestHandler = (request, response) => {
		try {
			const ticket = this.ticketService.emitTicket(request.body as ITicket);
			response.status(201).send({ ticket });
		} catch (error: any) {
			response.status(400).send({ error: error.message })
		}
	}

}
