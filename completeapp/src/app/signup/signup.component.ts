import { Component } from '@angular/core';
import { Enrolment } from '../../../service/app.service';
import { AdminUser } from '../../../model/admins';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterModule,NavbarComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userModel = new AdminUser('Gaurav', 21, 9812238475, 'gaurav@singh.com', 'Gaurav2');
  users: AdminUser[] = [];

  constructor(private adminenrolservice: Enrolment,private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.adminenrolservice.adminenroll(this.userModel).subscribe({
        next: (response) => {
          console.log('User data saved successfully!', response);
          form.reset(); // Reset the form after submission
          this.resetModel(); // Reset model as well
          Swal.fire('SignUp Successful');
        },
        error: (error) => {
          console.error('There was an error saving the user data!', error);
        }
      });
    } else {
      console.error('Form is invalid');
    }
    this.router.navigate(['/auth']);
  }

  resetModel() {
    this.userModel = new AdminUser('', 0, 0, '', '');
  }
}
