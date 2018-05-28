import { DaoInterface } from './dao.interface';
import { Person } from '../lesson01-classes/person';

export class PersonDao implements DaoInterface {
    
    tableName: string;
    
    insert(person: any): boolean {
        
        console.log("Inserindo....", person.toString());
        
        console.log("Inserido com sucesso.", person.toString());

        return true;
        //throw new Error("Method not implemented.");
    }
    
    update(object: any): boolean {
        return true;
    }
    
    delete(id: number): boolean {
        return true;
    }
    
    find(id: number) : Person {
       return null; 
    }
    
    findAll(): [any] {
        return [new Person("Person 1")];
    }
}