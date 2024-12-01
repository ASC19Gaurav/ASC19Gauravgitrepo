import { Injectable } from "@angular/core";
import { AdminUser } from "../model/admins";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class AdminServices{
    private authUrl = 'http://localhost:3000/adminusers'
    constructor(private http:HttpClient){

    }
    getAuthUsers(): Observable<AdminUser[]> {
        return this.http.get<AdminUser[]>(this.authUrl);
    }

    adminenroll(adminuser: AdminUser): Observable<any> {
        return this.http.post<any>(this.authUrl, adminuser);
    }
}