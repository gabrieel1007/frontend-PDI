import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class EditDialogService {

  constructor( private readonly  apiService: ApiService ){ }

  loadUsers() {
    return this.apiService.getAllUsersAndPoints();
  }
}
