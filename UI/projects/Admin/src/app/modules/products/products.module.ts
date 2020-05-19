import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule, MatInputModule, MatTableModule, MatFormFieldModule, MatTabsModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductService } from './services/product.service';
import { DialogComponent } from './dialog/dialog.component';
import { LibModule } from '../../@lib/lib.module';

const ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: []
  }
]

@NgModule({
  declarations: [ProductsComponent, DialogComponent],
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
  providers:[ProductService],
  entryComponents:[DialogComponent]

})
export class ProductsModule { }
