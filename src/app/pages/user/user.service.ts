import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private apiService: ApiService) { }

  getUsers(): Observable<any> {
    const user = this.apiService.authenticateUser('name', 'password');
    return user;
  }

  getAllUsers(): Observable<any> {
    const users = this.apiService.getAllUser();
    return users;
  }
}
