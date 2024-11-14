import { Component } from '@angular/core';
import { FormGroup,Validator,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../service/authservice';



@Component({
  selector: 'app-login',
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup;

  constructor(private fb:FormBuilder,private router:Router,protected authservice:AuthGuardService){
    this.loginForm = this.fb.group({
      
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  emailid="gaurav@gmail.com";
  password="password";

  onSubmit(){
    if(this.loginForm.valid){
      const {email , password}=this.loginForm.value;

      if(this.emailid==email &&this.password == password){
        alert("Login Succesful!!");
        this.authservice.isLoggedIn();
        this.router.navigate(['/home']);


      }
      else {
        alert('Invalid Email Id or Password')
      }

    }

  }
}
