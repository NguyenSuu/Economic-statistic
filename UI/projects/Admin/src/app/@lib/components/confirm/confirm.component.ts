import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm',
  template: `
    <p>
      {{ data.message }}
    </p>

    <div>
      <button mat-button (click)="confirm()">Có</button>

      <button mat-button (click)="onNoClick()" >Hủy</button>
    </div>
  `,
  styles: []
})
export class ConfirmComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ConfirmComponent>) { }

  confirm() {
    this.dialogRef.close(true)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
