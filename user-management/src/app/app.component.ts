import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule ,NgForm,ReactiveFormsModule} from '@angular/forms';

import { User } from '../../model/user';
import { Enrolment } from '../../service/user.service';



//hello
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-management';
  clases = ['Italian Cuisine','Baking Basics','Vegan Cooking','Sushi Making','Other '];
  levels = ['beginner','intermediate','advanced'];

  userModel =new User('Gaurav',21,'gaurav@singh.com',9812238475,'Vegan',new Date('2024-10-31'),'Beginner','yes','heyyyy') 
  users: User[] = [];
  constructor (private enrolservice : Enrolment){

  }

  ngOnInit() {
    this.fetchUsers(); // Fetch users when the component initializes
  }

  fetchUsers() {
    this.enrolservice.getUsers().subscribe({
      next: (data) => {
        this.users = data; // Store fetched user data
      },
      error: (error) => {
        console.error('There was an error fetching the user data!', error);
      }
    });
  }

onSubmit(form:NgForm){
  if (form.valid) {
    this.enrolservice.enroll(this.userModel).subscribe({
      next: (response) => {
        console.log('User data saved successfully!', response);
        form.reset(); // Reset the form after submission
        this.userModel = new User('', 0, '', 0, '', new Date(), '', 'no', ''); // Reset model as well
        this.fetchUsers();
      },
      error: (error) => {
        console.error('There was an error saving the user data!', error);
      }
    });

    alert('Form Submitted');

  } else {
    console.error('Form is invalid');
  }
 
}
}
