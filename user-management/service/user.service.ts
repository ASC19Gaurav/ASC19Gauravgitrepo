import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class Enrolment {
    private baseUrl = 'http://localhost:3000/users'; // Set the URL for your json-server endpoint

    constructor(private http: HttpClient) { }

    enroll(user: User): Observable<any> {
        return this.http.post<any>(this.baseUrl, user);
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl);
    }
}
