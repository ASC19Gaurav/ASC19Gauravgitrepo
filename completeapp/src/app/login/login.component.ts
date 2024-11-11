import { Component } from '@angular/core';
import { Enrolment } from '../../../service/app.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router ,RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterModule,NavbarComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected `styleUrl` to `styleUrls`
})
export class LoginComponent {
  loginError: string | null = null;

  constructor(private authService: Enrolment, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { email, password } = form.value;

      
      this.authService.getAuthUsers().subscribe(
        (data) => {
          
          const user = data.find((u) => u.email === email && u.password === password);

          if (user) {
            Swal.fire({title:'Login successful!',icon:"success"});
            this.loginError = null;
            this.router.navigate(['/admin']);
            
          } else {
            this.loginError = 'Invalid email or password.';
            Swal.fire({
              title:'wrong password or mail id',
            icon:"error"
            });
          }
        },
        (error) => {
          console.error('Error fetching user data:', error);
          this.loginError = 'An error occurred. Please try again later.';
        }
      );
    }
  }
}
