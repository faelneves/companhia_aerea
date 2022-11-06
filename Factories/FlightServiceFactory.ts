import FlightService from "../Service/FlightService";
import FlightRepository from "../Repository/FlightRepository";
import { IFlightRepository } from "../Repository/IFlightRepository";

export default class ExchangeServiceFactory {
  static make(flightRepository?: IFlightRepository) {
    const flightRepositoryInstance = flightRepository || new FlightRepository();
    return new FlightService(flightRepositoryInstance);
  }
}
