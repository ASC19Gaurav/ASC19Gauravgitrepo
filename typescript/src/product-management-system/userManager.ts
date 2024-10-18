import { User } from "./user";

export class UserManeger{


    private users : User[]= [];

    addUser(user : User):void{
        this.users.push(user);
    }

    listUsers():User[]{
        return this.users;
    }

    removeUser(name:string):void{
        this.users = this.users.filter(user => user.name !== name );

    }

    searchUser(id:number):any{
        const person = this.users.find(user => user.id == id);
        console.log(person);
    }

}