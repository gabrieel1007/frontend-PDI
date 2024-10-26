import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-points-history-dialog',
  standalone: true,
  imports: [],
  templateUrl: './points-history-dialog.component.html',
  styleUrl: './points-history-dialog.component.css'
})
export class PointsHistoryDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PointsHistoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){}
}
