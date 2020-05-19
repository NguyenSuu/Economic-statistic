import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from '../components/confirm/confirm.component';

@Injectable()
export class ConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  async show(message = "Xác nhận"): Promise<boolean> {
    let dialogRef = this.dialog.open(ConfirmComponent, {
      data: { message },
    })

    const result: boolean  = await dialogRef.afterClosed().toPromise();

    return new Promise(
      (res, rej) => {
        if (result) {
          res(true)
          
        }
      }
    );
  }
}
