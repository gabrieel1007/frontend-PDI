import { Component, Injectable } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private isLogged = false;

  constructor(
    private apiService: ApiService,
    private localStorage: LocalStorageService
  ) { }

  authenticateUser(name: string, password: string) {
    return this.apiService.authenticateUser(name, password);
  }

  isAuthenticated() {
    return this.apiService.authenticateUser('Capitão America', 'teste');
  }

  setAuthenticated(value: boolean) {
    this.isLogged = value;
  }

  setCredentialsLocalStorage(data: any) {
    this.localStorage.setCredentialsLocalStorage(data);
  }

  getCredentialsLocalStorage() {
    return this.localStorage.getCredentialsLocalStorage();
  }
}
