import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'], 
})
export class RegisterComponent {

}
