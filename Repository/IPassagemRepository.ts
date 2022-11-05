import { IPassagem } from "../Interfaces/IPassagem";

export interface IPassagemRepository {
	emitPassagem(passagem: IPassagem): IPassagem;
	getPassagemById(id: string): IPassagem;
}
