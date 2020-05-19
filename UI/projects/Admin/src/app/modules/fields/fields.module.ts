import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FieldsComponent } from './fields.component';
import { MatTableModule, MatInputModule, MatTabsModule, MatFormFieldModule, MatDialogModule, MatLabel, MatButtonModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FieldsService } from './services/fields.service';
import { DialogComponent } from './dialog/dialog.component';
import { IgxDialogModule } from 'igniteui-angular';
const ROUTES: Routes = [
  {
    path: '',
    component: FieldsComponent,
    children: []
  }
]
@NgModule({
  declarations: [FieldsComponent,    DialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatTableModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    IgxDialogModule
  ],
  providers:[FieldsService],
  entryComponents: [DialogComponent]
})
export class FieldsModule { }
