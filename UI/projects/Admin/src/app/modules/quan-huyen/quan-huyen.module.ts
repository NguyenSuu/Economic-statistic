import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanHuyenComponent } from './quan-huyen.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatInputModule, MatTableModule, MatTabsModule, MatButtonModule, MatPaginatorModule } from '@angular/material';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuanHuyenService } from './services/quan-huyen.service';
import { DistrictDialogComponent } from './district-dialog/district-dialog.component';
import { LibModule } from '../../@lib/lib.module';

const ROUTES: Routes = [
  {
    path: '',
    component: QuanHuyenComponent
  }
]

@NgModule({
  declarations: [QuanHuyenComponent, DistrictDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    LibModule,
    MatButtonModule
  ],
  providers: [
    QuanHuyenService
  ],
  entryComponents:[DistrictDialogComponent]

})
export class QuanHuyenModule { }
