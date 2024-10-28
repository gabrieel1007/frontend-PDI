import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';
  private userToken: string = localStorage.getItem('token') || '';

  constructor(
    private http: HttpClient,
    private readonly router: Router
  ) { 
    if(!this.userToken || this.userToken === '') {
      this.router.navigate(['/login']);
    }
  }

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
    const url = `${this.baseUrl}/users`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userToken}`
    })

    const users = this.http.get(url, { headers });
    return users;
  }

  getUserPointsHistory(userId: number): Observable<any> {
    const url = `${this.baseUrl}/points`;

    const body = {
      userId
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userToken}`
    })

    const pointsHistory =  this.http.post(url, body, { headers });
    return pointsHistory;

  }
  getUserById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
