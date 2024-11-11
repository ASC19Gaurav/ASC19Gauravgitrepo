import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';

import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, RouterModule, FormComponent,LoginComponent],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

}
