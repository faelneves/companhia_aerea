import { ILocalizacao } from "./ILocalizacao";

export enum Status {
	CONFIRMADO = "CONFIRMADO",
	PENDENTE = "PENDENTE",
	CANCELADO = "CANCELADO",
}

export interface IVoo {
	id: string;
	piloto: string;
	origem: ILocalizacao;
	destino: ILocalizacao;
	partida: Date;
	status: Status;
	chegada?: Date;
	ocupacao?: number;
}

export interface IFilterVoo {
	origem?: ILocalizacao;
	destino?: ILocalizacao;
	partida?: Date;
	status?: Status;
}