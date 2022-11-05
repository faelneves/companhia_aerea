import { IPassagem } from "../Interfaces/IPassagem";
import { IPassagemRepository } from "./IPassagemRepository";

const passagens: Array<IPassagem> = [];

export default class PassagemRepository implements IPassagemRepository {
	emitPassagem(passagem: IPassagem): IPassagem {
		passagens.push(passagem)
		return passagem
	}

	getPassagemById(id: string): IPassagem {
		let passagem = passagens.filter((passagem) => passagem.id == id);
		if (passagem.length == 0) {
			throw new Error("Passagem não encontrada")
		}
		return passagem[0];
	}
}
