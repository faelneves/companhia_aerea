import { IFilterVoo, IVoo, Status } from "../Interfaces/IVoo";
import { IFilterPessoa } from "../Interfaces/IPessoa";

export interface IVooService {
	createVoo(voo: IVoo);
	listVoo(params: IFilterVoo);
	getVooById(id: string);
	changeStatus(id: string, status: Status);
	getPassengerBy(name?: string, cpf?: string);
}
