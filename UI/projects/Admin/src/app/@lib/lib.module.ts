import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ConfirmDialogService } from './services/confirm-dialog.service';
import { MatButtonModule, MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    ConfirmDialogService
  ],
  entryComponents: [
    ConfirmComponent
  ]
})
export class LibModule { }
