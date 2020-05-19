import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLineComponent } from './product-line.component';
import { Routes, RouterModule } from '@angular/router';
import {  MatTableModule, MatInputModule, MatTabsModule, MatFormFieldModule, MatDialogModule, MatButtonModule, MatSelectModule, MatSortModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductLineService } from './services/product-line.service';
import { DialogComponent } from './dialog/dialog.component';
import { LibModule } from '../../@lib/lib.module';

const ROUTES: Routes = [
  {
    path: '',
    component: ProductLineComponent,
    children: []
  }
]

@NgModule({
  declarations: [ProductLineComponent, DialogComponent],
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
    MatSelectModule,
    MatSortModule,
    LibModule
  ],
  providers:[ProductLineService],
  entryComponents:[DialogComponent]
})
export class ProductLineModule { }
