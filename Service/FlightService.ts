import { IFilterFlight, IFlight, Status } from "../Interfaces/IFlight";
import { IFlightRepository } from "../Repository/IFlightRepository";

export default class FlightService {
  private flightRepository: IFlightRepository;
  constructor(flightRepository: IFlightRepository) {
    this.flightRepository = flightRepository;
  }
  createFlight(flight: IFlight) {
    if (flight.origin.city == flight.destination.city) {
      throw new Error("a origem não poder ser igual ao destino");
    }
    if (!flight.ocupation) {
      flight.ocupation = 0;
    }
    return this.flightRepository.createFlight(flight);
  }
  listFlight(params: IFilterFlight) {
    return this.flightRepository.filterFlight(params);
  }
  getFlightById(id: string) {
    return this.flightRepository.getFlightById(id);
  }
  changeStatus(id: string, status: Status) {
    if (!status) {
      throw new Error("status invalido");
    }
    return this.flightRepository.changeStatus(id, status);
  }
}
