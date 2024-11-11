import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateComponent } from '../update/update.component';

import { User } from '../../../model/User';
import { Enrolment } from '../../../service/app.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,UpdateComponent, NavbarComponent,RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'] 
})
export class AdminComponent {
  users: User[] = [];
  showCheckboxes = false;
  showSearchbox =false;
  searchvalue:string='';
  selectedUserId: number[] = [];

  constructor(private enrolservice: Enrolment) {}

  ngOnInit() {
    this.fetchUsers(); 
  }

  fetchUsers() {
    this.enrolservice.getUsers().subscribe({
      next: (data) => {
        console.log('Fetched users:', data);
        this.users = data; 
      },
      error: (error) => {
        console.error('There was an error fetching the user data!', error);
      }
    });
  }

  toggleCheckboxes() {
    this.showCheckboxes = !this.showCheckboxes;

    if (!this.showCheckboxes) {
      this.selectedUserId = []; 
    }
  }

  onSelected(userId: number, isChecked: boolean) {
    if (isChecked) {
      this.selectedUserId.push(userId);
    } else {
      this.selectedUserId = this.selectedUserId.filter(id => id !== userId); 
    }
  }

  deleteSelectedUsers() {
    console.log(this.selectedUserId);
    this.selectedUserId.forEach((id) => {
      this.enrolservice.deleteUser(id).subscribe(() => {
        this.users = this.users.filter((user) => user.id !== id); 
      });
    });

    
    this.selectedUserId = [];
    this.showCheckboxes = false;
    
  }

search(){
  this.showSearchbox=true;
  this.enrolservice.searchUser(this.searchvalue).subscribe({
    next: (data) => {
      console.log('Fetched users:', data);
      this.users = data; 
    },
    error: (error) => {
      console.error('There was an error fetching the user data!', error);
    }
  });
}

}
