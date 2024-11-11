import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,NgForm,ReactiveFormsModule} from '@angular/forms';
 import { NavbarComponent } from '../navbar/navbar.component';
import { User } from '../../../model/User';
import { Enrolment } from '../../../service/app.service';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,NavbarComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  clases = ['Italian Cuisine','Baking Basics','Vegan Cooking','Sushi Making','Other '];
  levels = ['beginner','intermediate','advanced'];

  userModel =new User(1,'Gaurav',21,'gaurav@singh.com',9812238475,'Vegan',new Date('2024-10-31'),'Beginner','yes','heyyyy') 
  users: User[] = [];
  constructor (private enrolservice : Enrolment,private router: Router){

  }

  onSubmit(form:NgForm){
    if (form.valid) {
      this.enrolservice.enroll(this.userModel).subscribe({
        next: (response) => {
          console.log('User data saved successfully!', response);
          form.reset();
          this.userModel = new User(0,'', 0, '', 0, '', new Date(), '', 'no', ''); 

          
        },
        error: (error) => {
          console.error('There was an error saving the user data!', error);
        }
      });
  
      Swal.fire({title:'Form Submitted successful!',icon:"success"});
      this.router.navigate(['/']);
    } else {
      console.error('Form is invalid');
    }
    
  }

}
