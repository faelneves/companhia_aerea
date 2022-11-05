import { IPassagem } from "../Interfaces/IPassagem"
import { IPassagemRepository } from "../Repository/IPassagemRepository";

export default class PassagemService {
	private passagemRepository: IPassagemRepository;
	constructor(passagemRepository: IPassagemRepository) {
		this.passagemRepository = passagemRepository
	}
	emitPassagem(passagem: IPassagem) {
		return this.passagemRepository.emitPassagem(passagem)
	}
}