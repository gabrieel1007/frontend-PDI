import { Component, Inject, NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { ApiService } from '../../../api/api.service';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButton,
    MatSelectModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioButton,
    MatRadioGroup
    ],
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.css'
})
export class EditDialogComponent {
  public users: any;
  public userSelected: any;
  public pointsActual: number = 0;
  public addPoints: boolean = false;
  public quantityPoints: number = 0;
  public pointsAfter: number = 0;


  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) {
    this.loadUsers();
  }

  loadUsers() {
    this.apiService.getAllUser().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }

  editUser(){
    console.log(this.userSelected);
    console.log(this.pointsAfter);
    console.log(this.addPoints);
    console.log(this.quantityPoints)
  }

  getUserSelected(event: any){
    console.log(event);
    this.pointsActual = event.points;
    this.calculatePoints();
  }

  calculatePoints() {
    console.log(this.addPoints);
    console.log(this.quantityPoints);
    console.log(this.pointsActual);
    if(this.addPoints){
      this.pointsAfter = this.pointsActual + this.quantityPoints;
    } else {
      this.pointsAfter = this.pointsActual - this.quantityPoints;
    }
  }
}
