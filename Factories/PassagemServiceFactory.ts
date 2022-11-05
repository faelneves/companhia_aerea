import { IPassagemRepository } from "../Repository/IPassagemRepository"
import PassagemRepository from "../Repository/PassagemRepository"
import PassagemService from "../Service/PassagemService"

export default class PassagemServiceFactory {
	static make(passagemRepository?: IPassagemRepository) {
		const passagemRepositoryInstance = passagemRepository || new PassagemRepository();
		return new PassagemService(passagemRepositoryInstance);
	}
}