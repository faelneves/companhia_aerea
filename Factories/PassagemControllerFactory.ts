import PassagemController from "../Controller/PassagemController";
import { IPassagemService } from "../Service/IPassagemService";
import PassagemServiceFactory from "./PassagemServiceFactory";

export default class PassagemControllerFactory {
	static make(passagemService?: IPassagemService) {
		const passagemServiceInstance = passagemService || PassagemServiceFactory.make();
		return new PassagemController(passagemServiceInstance);
	}
}
