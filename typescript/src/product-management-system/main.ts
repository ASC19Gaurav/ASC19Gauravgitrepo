import { UserManeger } from "./userManager";
import { User } from "./user";
import * as readlineSync from "readline-sync";

const usermanager = new UserManeger();
const user: User = {
  id: 0,
  name: "Gaurav Singh",
  age: 21,
  email: "gaurav24@gmail.com",
  phone: 9045737106,
  class9: "itallian",
  level: "Beginner",
  dietary: true,
  notes: "hahahhahahahhaha",
};

usermanager.addUser(user);

let users: User[] = usermanager.listUsers();

//console.log(users);

const user2: User = {
  id: 1,
  name: "Rohit",
  age: 21,
  email: "rohit24@gmail.com",
  phone: 9045737111,
  class9: "itallian",
  level: "Beginner",
  dietary: true,
  notes: "hahahhahahahhaha",
};

usermanager.addUser(user2);

//users = usermanager.listUsers();
//console.log(users);
menu();
function menu() {
  console.log(`
        What would you like to do??
            1.Add User
            2.Display Users
            3.Search User
            4.Remove User
            5.Update
            6.Exit    `);

  const query = parseInt(readlineSync.question("Tell mee"));

  if (query == 1) {
    const id = readlineSync.question("what's the ID");
    const name = readlineSync.question("Tell me the name");
    const age = parseInt(readlineSync.question("Age????"));
    const email = readlineSync.question("Now,Tell your mail Id");
    const phone = parseInt(readlineSync.question("what's your phone number?"));

    const class9 = readlineSync.question(`Which class would you like to attend
            1.Ittallian
            2.Baking
            3.Vegan
            4.Sushi`);
    const level = readlineSync.question(`What is your expertise level
            1.Beginner
            2.Intermediate
            3.Advance`);

    const dietary = readlineSync.question(
      "Do you have dietry restriction (true/false)"
    );
    const notes = readlineSync.question("Add some notes if you want");

    const newuser: User = {
      id: parseInt(id),
      name,
      age,
      email,
      phone,
      class9,
      level,
      dietary,
      notes,
    };
    usermanager.addUser(newuser);
    menu();
  } else if (query == 2) {
    const users12 = usermanager.listUsers();
    console.log(users12);
    menu();
  } else if (query == 3) {
    const seracheduser = parseInt(
      readlineSync.question("Tell me the id of the user ypu want to search")
    );
    usermanager.searchUser(seracheduser);
    menu();
  } else if (query == 4) {
    const deluser = parseInt(
      readlineSync.question("Id of user you want to remove")
    );
    usermanager.removeUser(deluser);
    menu();
  } 
  else if(query == 5){
    const updateuserid = parseInt(readlineSync.question("type the id of user you want to update"));
   
    const updateuserelement = parseInt( readlineSync.question(`Which property would you like to Update
        1.Id
        2.Name
        3.Age
        4.Email
        5.Phone
        6.Class
        7.Level
        8.Dietry
        9.Notes`));

let updateinput;

        if(updateuserelement==1){
            updateinput = parseInt(readlineSync.question("type the updated id"));
        }
        else if(updateuserelement==2){
            updateinput = readlineSync.question("type the updated name");
        }
        else if(updateuserelement==3){
            updateinput = parseInt(readlineSync.question("type the updated age"));
        }
        else if(updateuserelement==4){
            updateinput = readlineSync.question("type the updated email");
        }
        else if(updateuserelement==5){
            updateinput = parseInt(readlineSync.question("type the updated email"));
        }
        else if(updateuserelement==6){
            updateinput = readlineSync.question(`type the updated value 
            1.Ittallian
            2.Baking
            3.Vegan
            4.Sushi`);
        }
        else if(updateuserelement==7){
            updateinput = readlineSync.question(`type the updated value of level
                1.Beginner
            2.Intermediate
            3.Advance`);
        }
        else if(updateuserelement==8){
            updateinput = readlineSync.question("type the updated value (true/false)");
        }
        else if(updateuserelement==9){
            updateinput = readlineSync.question("type the updated notes");
        }
        

    usermanager.updateuser(updateuserid,updateuserelement,updateinput);
  }
  
  else if (query == 6) {
    console.log("**********THANK YOU**********");
  }
}
