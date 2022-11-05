import { IFilterVoo, IVoo, Status } from "../Interfaces/IVoo";
export interface IVooRepository {
	createVoo(voo: IVoo): IVoo;
	filterVoo(params: IFilterVoo): Array<IVoo>;
	getVooById(id: string): IVoo;
	changeStatus(id: string, status: Status): IVoo;
}
