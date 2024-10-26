import { Component, Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private isLogged = false;

  constructor(private apiService: ApiService) { }

  authenticateUser(name: string, password: string) {
    const result = this.apiService.authenticateUser(name, password);
    console.log(result);
    return result;
  }

  isAuthenticated() {
    return this.apiService.authenticateUser('Capitão America', 'teste');
  }

  setAuthenticated(value: boolean) {
    this.isLogged = value;
  }
}
