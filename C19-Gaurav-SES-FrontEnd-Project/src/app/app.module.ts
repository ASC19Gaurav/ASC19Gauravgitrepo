import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './app.material.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [AppComponent,LoginComponent,NavbarComponent,HomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule,CommonModule,MaterialModule,RouterModule,AppRoutingModule,ReactiveFormsModule,FormsModule],
  providers:[HttpClient,provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {}
