import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
@Injectable({
  providedIn: 'root'
})
export class EditGlobalDialogService {

  constructor( private readonly apiService: ApiService) { }

  resetAllPoints(){
    return this.apiService.resetAllPoints();
  }
}
