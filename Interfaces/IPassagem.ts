import { IPessoa } from "./IPessoa";
import { IVoo } from "./IVoo";

export interface IPassagem {
	id: string;
	passageiro: IPessoa;
	voo: IVoo;
	assento: number;
}