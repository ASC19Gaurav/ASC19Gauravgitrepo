import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";


import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { MatchRegistrationComponent } from "./match-registration/match-registration.component";
import { MatchesComponent } from "./matches/matches.component";
import { UpdateMatchComponent } from "./update-match/update-match.component";




//import { AuthGuardService } from "./service/authservice";





const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    {path:'matchregistration',component:MatchRegistrationComponent},
    { path: 'update/:id', component: UpdateMatchComponent },
    {path:'matches/:tournamentName',component:MatchesComponent}


    
  ];

@NgModule({
    
    imports:[RouterModule.forRoot(routes) ,CommonModule,BrowserModule],
    exports:[RouterModule]
})

export class AppRoutingModule{

}