import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeDataComponent } from './type-data.component';
import { Routes, RouterModule } from '@angular/router';
import { MatSelectModule, MatInputModule, MatTableModule, MatFormFieldModule, MatTabsModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LibModule } from '../../@lib/lib.module';
import { TypeDataService } from './services/type-data.service';
import { DialogTypeDataComponent } from './dialog-type-data/dialog-type-data.component';

const ROUTES: Routes = [
  {
    path: '',
    component: TypeDataComponent,
    children: []
  }
]
@NgModule({
  declarations: [TypeDataComponent, DialogTypeDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    LibModule
  ],
  providers:[TypeDataService],
  entryComponents:[DialogTypeDataComponent]
})
export class TypeDataModule { }
