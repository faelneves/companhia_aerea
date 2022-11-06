import { RequestHandler } from "express";
import { IFilterFlight, IFlight } from "../Interfaces/IFlight";
import { IFlightService } from "../Service/IFlightService";

export default class FlightController {
	private flightService: IFlightService;
	constructor(flightService: IFlightService) {
		this.flightService = flightService;
	}

	createFlight: RequestHandler = (request, response) => {
		try {
			const flight = this.flightService.createFlight(request.body as IFlight);
			response.status(201).send({ flight });
		} catch (error: any) {
			response.status(400).send({ error: error.message });
		}
	};

	listFlight: RequestHandler = (request, response) => {
		try {
			const flights = this.flightService.listFlight(request.query as IFilterFlight);
			response.status(200).send({ flights: flights });
		} catch (error: any) {
			response.status(400).send({ error: error.message });
		}
	};

	getFlights: RequestHandler = (request, response) => {
		try {
			const flightId = request.params.id;
			const flight = this.flightService.getFlightById(flightId);
			response.status(200).send({ flight });
		} catch (error: any) {
			response.status(400).send({ error: error.message });
		}
	};

	changeStatus: RequestHandler = (request, response) => {
		try {
			const flightId = request.params.id;
			const status = request.body.status;
			const flight = this.flightService.changeStatus(flightId, status);
			response.status(200).send({ flight });
		} catch (error: any) {
			response.status(400).send({ error: error.message });
		}
	};
}
