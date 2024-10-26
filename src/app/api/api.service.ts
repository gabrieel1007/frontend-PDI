import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  authenticateUser(name: string, password: string): Observable<any> {
    const user =  this.http.get(`${this.baseUrl}/login/${name}`);
    return user;
  }

  getAllUser(): Observable<any> {
    const users = this.http.get(`${this.baseUrl}`);
    return users;
  }

  getUserById(id: any): Observable<any> {
    console.log(id);
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
}
