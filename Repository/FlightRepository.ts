import { IPerson } from "../Interfaces/IPerson";
import { IFilterFlight, IFlight, Status } from "../Interfaces/IFlight";
import { IFlightRepository } from "./IFlightRepository";

const flights: Array<IFlight> = [];

export default class FlightRepository implements IFlightRepository {
	createFlight(flight: IFlight): IFlight {
		flights.push(flight);
		return flight;
	}

	filterFlight(params: IFilterFlight): Array<IFlight> {
		return flights.filter((flight) => {
			if (params?.destination && params.destination.city != flight.destination.city)
				return false;
			if (params?.origin && params.origin.city != flight.origin.city)
				return false;
			if (params?.status && params.status != flight.status) return false;
			if (
				params?.departure &&
				params.departure.toLocaleDateString() != flight.departure.toLocaleDateString()
			)
				return false;
			return true;
		});
	}

	getFlightById(id: string): IFlight {
		let flight = flights.filter((flight) => flight.id == id);
		if (flight.length == 0) {
			throw new Error("voo não encontrado");
		}
		return flight[0];
	}

	changeStatus(id: string, status: Status): IFlight {
		let flightIndex = flights.findIndex((flight) => flight.id == id);
		if (flightIndex == -1) {
			throw new Error("voo não encontrado");
		}
		flights[flightIndex].status = status;
		return flights[flightIndex];
	}
}
