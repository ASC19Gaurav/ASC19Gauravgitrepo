import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  loggedInUserName: string | null = '';

  ngOnInit(): void {
    this.loggedInUserName = sessionStorage.getItem('userLoggedIn');
  }
}
