import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup ,ReactiveFormsModule } from '@angular/forms';
import { Enrolment } from '../../../service/app.service';
import { Router ,RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule,NavbarComponent],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  updateForm: FormGroup;
  showInputField = false;
  showDropdownClass = false;
  showDropdownLevel = false;
  showDatePicker = false;
  showDietaryOptions = false;

  constructor(private ensrolservice: Enrolment,private fb: FormBuilder,private router:Router) {
    
    this.updateForm = this.fb.group({
      id: [''],
      selectedField: [''],
      inputValue: ['']
    });
  }

  onFieldChange(event: any) {
    const selectedField = event.target.value;
    
    this.showInputField = this.showDropdownClass = this.showDropdownLevel = this.showDatePicker = this.showDietaryOptions = false;

   
    switch (selectedField) {
      case 'name':
      case 'age':
      case 'email':
      case 'phone':
      case 'notes':
        this.showInputField = true;
        break;
      case 'class':
        this.showDropdownClass = true;
        break;
      case 'level':
        this.showDropdownLevel = true;
        break;
      case 'date':
        this.showDatePicker = true;
        break;
      case 'dietry':
        this.showDietaryOptions = true;
        break;
    }
  }

  onSubmit() {
    const formData = this.updateForm.value;
    const id = this.updateForm.get('id')?.value;
    const selectedField = this.updateForm.get('selectedField')?.value;
    const updateValue = this.updateForm.get('inputValue')?.value;

    this.ensrolservice.updateUser(id,updateValue,selectedField).subscribe({
      next: () => {
          console.log('User updated successfully');
          this.router.navigate(['/admin']);
          Swal.fire({
              title: 'User updated successfully!',
              icon: 'success'
          });
      },
      error: (error) => {
          console.error('Update failed:', error);
          Swal.fire({
              title: 'Update failed!',
              text: error.message,
              icon: 'error'
          });
        }
  });
}
}