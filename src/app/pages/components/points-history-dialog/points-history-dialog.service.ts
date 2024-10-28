import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PointsHistoryDialogService {

  constructor(
    private readonly localStorage: LocalStorageService,
    private readonly apiService: ApiService
  ) { }

  getIdUser(){
    return this.localStorage.getIdUser();
  }

  getUserPointsHistory(userId: number){
    return this.apiService.getUserPointsHistory(userId);
  }
}
