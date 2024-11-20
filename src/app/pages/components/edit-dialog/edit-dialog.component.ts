import { Component, Inject, NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { ApiService } from '../../../services/api/api.service';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatList, MatListModule } from '@angular/material/list';
import { EditDialogService } from './edit-dialog.service';

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
    MatRadioGroup,
    FormsModule,
    MatListModule
    ],
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.css'
})
export class EditDialogComponent {
  public users: any;
  public userSelected: any;
  public addPoints: boolean = false;
  public quantityPoints: number = 0;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private readonly editDialogService: EditDialogService
  ) {
    this.loadUsers();
  }

  loadUsers() {
    this.editDialogService.loadUsers().subscribe((response) => {
      this.users = response;
    });
  }

  editUsers(){
    const params = {
      userSelected: this.userSelected,
      points: this.quantityPoints,
      typeOperation: this.addPoints
    }
    console.log(params);
    return this.apiService.editUsers(params).subscribe((response: any) => {
      console.log(response);
    });
  }
}
