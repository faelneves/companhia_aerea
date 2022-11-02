import { ILocalizacao } from "./ILocalizacao";

export enum Status {
  CONFIRMADO = "CONFIRMADO",
  PENDING = "PENDING",
  CANCELED = "CANCELED",
}

export interface IVoo {
  id: string;
  piloto: string;
  origem: ILocalizacao;
  destino: ILocalizacao;
  partida: Date;
  chegada?: Date;
  status: Status;
}

export interface IFilterVoo {
  origem?: ILocalizacao;
  destino?: ILocalizacao;
  partida?: Date;
  status?: Status;
}
