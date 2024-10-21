import { User } from "./user";

export class UserManeger{


    private users : User[]= [];

    addUser(user : User):void{
        this.users.push(user);
    }

    listUsers():User[]{
        return this.users;
    }

    removeUser(id:number):void{
        this.users = this.users.filter(user => user.id !== id );

    }

    searchUser(id:number):any{
        const person = this.users.find(user => user.id == id);
        console.log(person);
    }
    updateuser(id:number,element:number,updateinput:any):any{
        const updateperson = this.users.find(user => user.id == id);
        if(element==1){
            updateperson.id=updateinput;
            console.log(updateperson);
        }
        else if(element==2){
            updateperson.name=updateinput;
            console.log(updateperson);
        }
        else if(element==3){
            updateperson.age=updateinput;
            console.log(updateperson);
        }
        else if(element==4){
            updateperson.email=updateinput;
            console.log(updateperson);
        }
        else if(element==5){
            updateperson.phone=updateinput;
            console.log(updateperson);
        }
        else if(element==6){
            updateperson.class9=updateinput;
            console.log(updateperson);
        }
        else if(element==7){
            updateperson.level=updateinput;
            console.log(updateperson);
        }
        else if(element==8){
            updateperson.dietary=updateinput;
            console.log(updateperson);
        }
        else if(element==9){
            updateperson.notes=updateinput;
            console.log(updateperson);
        }

    }

}