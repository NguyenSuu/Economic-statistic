import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyProductionComponent } from './monthly-production.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule, MatTabsModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatButtonModule, MatSelectModule, MatSortModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LibModule } from '../../@lib/lib.module';
import { MonthlyProductionService } from './services/monthly-production.service';
import { DialogMPComponent } from './dialog-mp/dialog-mp.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MonthlyProductionComponent,
    children: []
  }
]

@NgModule({
  declarations: [MonthlyProductionComponent, DialogMPComponent],
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
  providers:[MonthlyProductionService],
  entryComponents:[DialogMPComponent]
})
export class MonthlyProductionModule { }
