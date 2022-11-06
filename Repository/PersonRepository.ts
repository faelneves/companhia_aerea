import { IFilterPerson, IPerson } from "../Interfaces/IPerson";

const pessoas: Array<IPerson> = [];

export default class VooRepository {
  createPerson(person: IPerson): IPerson {
    pessoas.push(person);
    return person;
  }
  listPerson(personFilter: IFilterPerson): Array<IPerson> {
    return pessoas.filter((person) => {
      if (personFilter?.name && !person.name.includes(personFilter.name))
        return false;
      if (personFilter?.cpf && person.cpf != personFilter.cpf) return false;
      return true;
    });
  }
}
