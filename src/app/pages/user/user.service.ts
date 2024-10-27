import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(
    private apiService: ApiService,
    private readonly localStorage: LocalStorageService
  ) { }

  getUsers(): Observable<any> {
    const user = this.apiService.authenticateUser('name', 'password');
    return user;
  }

  getusersAndPoints(): Observable<any> {
    const users = this.apiService.getAllUsersAndPoints();
    return users;
  }

  getCredentialsLocalStorage(){
    return this.localStorage.getAllCredentialsLocalStorage();
  }

  getIfuserIsAdmin(): boolean {
    const admin = this.localStorage.isUserAdmin();
    if(admin === 'true'){
      return true;
    }
    return false;
  } 

  logoutUser() {
    this.localStorage.logoutUser();
  }
}
