import { UserManeger } from "./userManager";
import { User } from "./user";

const usermanager = new UserManeger();
const  user : User ={
        id:0,
        name: 'Gaurav Singh', 
        age: 21,
        email: "gaurav24@gmail.com",
        phone: 9045737106,
        class: 'itallian',
        level: 'Beginner',
        dietary: true,
        notes: 'hahahhahahahhaha'
};

usermanager.addUser(user);

let users : User[] = usermanager.listUsers();

//console.log(users);

const  user2 : User ={
    id:1,
    name: 'Rohit', 
    age: 21,
    email: "rohit24@gmail.com",
    phone: 9045737111,
    class: 'itallian',
    level: 'Beginner',
    dietary: true,
    notes: 'hahahhahahahhaha'
};

usermanager.addUser(user2);

users = usermanager.listUsers();
//console.log(users);

usermanager.searchUser(1)

