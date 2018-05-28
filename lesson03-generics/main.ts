import { DaoInterface } from './dao.interface';
import { Dao } from './dao';
import { Person } from "../lesson01-classes/person";

let dao: DaoInterface<Person> = new Dao<Person>();

let person: Person = new Person("Person 2");

dao.insert(person);