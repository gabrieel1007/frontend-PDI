import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';
  private userToken: string = '';

  constructor(private http: HttpClient) { }

  authenticateUser(name: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/auth/login`;

    const body = {
      username: name,
      password: password
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, body, { headers });
  }

  getAllUsersAndPoints(): Observable<any> {
    const users = this.http.get(`${this.baseUrl}`);
    return users;
  }

  getUserById(id: any): Observable<any> {
    console.log(id);
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
