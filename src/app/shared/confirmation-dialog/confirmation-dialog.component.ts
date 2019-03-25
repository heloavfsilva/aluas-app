import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['../../app.component.css']
})
export class ConfirmationDialogComponent{

  constructor(
   public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
   @Inject(MAT_DIALOG_DATA) public message: string) { }
   onNoClick(): void {
     this.dialogRef.close();
   }

}
