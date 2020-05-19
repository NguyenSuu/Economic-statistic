import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsComponent } from './units.component';
import { Routes, RouterModule } from '@angular/router';
import { MatSelectModule, MatInputModule, MatTableModule, MatTabsModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UnitsService } from './services/units.service';
import { LibModule } from '../../@lib/lib.module';
import { DialogUnitComponent } from './dialog-unit/dialog-unit.component';

const ROUTES: Routes = [
  {
    path: '',
    component: UnitsComponent
  }
]

@NgModule({
  declarations: [UnitsComponent, DialogUnitComponent],
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
    MatButtonModule,
    LibModule
  ],
  providers:[UnitsService],
  entryComponents:[DialogUnitComponent]

})
export class UnitsModule { }
