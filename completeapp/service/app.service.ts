    import { Injectable } from "@angular/core";
    import { HttpClient } from "@angular/common/http";
    import { User  } from "../model/User";
    import { AdminUser } from "../model/admins";
    import { Observable } from 'rxjs';
    import { map,switchMap } from 'rxjs/operators';

    @Injectable({
        providedIn: "root"
    })
    export class Enrolment {
        private baseUrl = 'http://localhost:3000/users'; 
        private authUrl = 'http://localhost:3000/adminusers'
        constructor(private http: HttpClient) { }

        enroll(user: User): Observable<any> {
            return this.http.post<any>(this.baseUrl, user);
        }

        getUsers(): Observable<User[]> {
            return this.http.get<User[]>(this.baseUrl);
        }

        getAuthUsers(): Observable<AdminUser[]> {
            return this.http.get<AdminUser[]>(this.authUrl);
        }

        adminenroll(adminuser: AdminUser): Observable<any> {
            return this.http.post<any>(this.authUrl, adminuser);
        }

        deleteUser(id: number): Observable<void> {
            return this.http.delete<void>(`${this.baseUrl}/${id}`);
        }

        searchUser(name: string): Observable<User[]> {
            return this.http.get<User[]>(this.baseUrl).pipe(
            map((data: User[]) => {
                
                return data.filter(user => user.name.toLowerCase( ) === name.toLowerCase( ));
            })
            );
        }

        updateUser(id: number, updateValue: any, selectedField: string): Observable<any> {
            return this.http.get<User>(`${this.baseUrl}/${id}`).pipe(
                switchMap((user) => {
                    if (!user) {
                        throw new Error(`User with ID ${id} not found.`);
                    }
        
                    // Update the specific field based on selectedField
                    switch (selectedField) {
                        case 'name':
                            user.name = updateValue;
                            break;
                        case 'age':
                            user.age = updateValue;
                            break;
                        case 'email':
                            user.email = updateValue;
                            break;
                        case 'phone':
                            user.phone = updateValue;
                            break;
                        case 'class':
                            user.classs = updateValue;
                            break;
                        case 'date':
                            user.date = updateValue;
                            break;
                        case 'level':
                            user.level = updateValue;
                            break;
                        case 'dietry':
                            user.dietary = updateValue;
                            break;
                        case 'notes':
                            user.notes = updateValue;
                            break;
                        default:
                            throw new Error(`Invalid field: ${selectedField}`);
                    }
        
                    // Send the updated user object back to the server
                    return this.http.put<User>(`${this.baseUrl}/${id}`, user);
                })
            );
        }
    }
