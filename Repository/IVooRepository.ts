import { IFilterVoo, IVoo, Status } from "../Interfaces/IVoo";
import { IPessoa } from "../Interfaces/IPessoa";

export interface IVooRepository {
	createVoo(voo: IVoo): IVoo;
	filterVoo(params: IFilterVoo): Array<IVoo>;
	getVooById(id: string): IVoo;
	changeStatus(id: string, status: Status): IVoo;
	getPassengerBy(name?: string, cpf?: string): IPessoa;
}
