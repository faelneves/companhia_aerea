import { ITicket } from "../Interfaces/ITicket";

export interface ITicketService {
  emitTicket(ticket: ITicket)
}
