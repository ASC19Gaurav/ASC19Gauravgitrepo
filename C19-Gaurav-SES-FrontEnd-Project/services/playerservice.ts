import { Injectable } from "@angular/core";
import { Matches } from "../model/matches";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn:"root"
})

export class PlayerServices{
    private playerUrl = 'http://localhost:8080/api/players'
    constructor(private http:HttpClient){

    }
    getPlayers(): Observable<Matches[]> {
        return this.http.get<Matches[]>(this.playerUrl);
    }

    playerEnroll(adminuser: Matches): Observable<any> {
        return this.http.post<any>(this.playerUrl, adminuser);
    }

}   