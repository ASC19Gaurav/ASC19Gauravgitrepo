
import {  Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignupComponent } from './signup/signup.component';
import { FormComponent } from './form/form.component';
import { UpdateComponent } from './update/update.component';


export const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'auth', component: AuthenticationComponent},
  { path: 'signup', component:SignupComponent },
  {path:'form',component:FormComponent},
  {path:'update',component:UpdateComponent}
  
];


export class AppRoutingModule { }
