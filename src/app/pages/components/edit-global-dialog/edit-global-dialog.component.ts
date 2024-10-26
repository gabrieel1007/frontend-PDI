import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-global-dialog',
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
  templateUrl: './edit-global-dialog.component.html',
  styleUrl: './edit-global-dialog.component.css'
})
export class EditGlobalDialogComponent {
  public users: any;
  public userSelected: any;
  public pointsActual: number = 0;
  public addPoints: boolean = false;
  public quantityPoints: number = 0;
  public pointsAfter: number = 0;

  constructor(
    public dialogRef: MatDialogRef<EditGlobalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){}

  editUser(){
    console.log(this.userSelected);
    console.log(this.pointsAfter);
    console.log(this.addPoints);
    console.log(this.quantityPoints)
  }

  calculatePoints() {
    if(this.addPoints){
      this.pointsAfter = this.pointsActual + this.quantityPoints;
    } else {
      this.pointsAfter = this.pointsActual - this.quantityPoints;
    }
  }
}
