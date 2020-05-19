import { Component, OnInit } from '@angular/core';
import { MonthlyProduction } from '../../models/monthly-production';
import { MatDialog } from '@angular/material';
import { DialogMPComponent } from './dialog-mp/dialog-mp.component';
import { MonthlyProductionService } from './services/monthly-production.service';
import { ConfirmDialogService } from '../../@lib/services/confirm-dialog.service';

@Component({
  selector: 'app-monthly-production',
  templateUrl: './monthly-production.component.html',
  styleUrls: ['./monthly-production.component.scss']
})

export class MonthlyProductionComponent implements OnInit {
  displayedColumns: string[] = ["position", "month", "years", "product_id", "productLine_id", "data", "delete"]
  monthlyProduction: MonthlyProduction[] = null;
  currentMonthlyProduction: MonthlyProduction = null;
  oldMonthlyProduction: MonthlyProduction = null;
  editIndex = null;
  constructor(private dialog: MatDialog, public mPSV: MonthlyProductionService, private confirmDialog: ConfirmDialogService) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogMPComponent, {
      data: { monthlyProduction: this.monthlyProduction }
    });
  }

  ngOnInit() {
    this.mPSV.monthlyProduction$.subscribe(l => this.monthlyProduction = l)
  }
  toggleEdit(index: number, monthlyProduction: MonthlyProduction) {
    this.currentMonthlyProduction = monthlyProduction;
    this.editIndex = index;
    this.oldMonthlyProduction = { ...monthlyProduction };
  }
  cancelEdit() {
    this.currentMonthlyProduction.month = this.oldMonthlyProduction.month;
    this.currentMonthlyProduction.year = this.oldMonthlyProduction.year;
    // this.currentMonthlyProduction.productCode = this.oldMonthlyProduction.productCode;
    // this.currentMonthlyProduction.typeDataCode = this.oldMonthlyProduction.typeDataCode;
    this.editIndex = this.currentMonthlyProduction = null;
  }
  updateData() {
    this.mPSV.update(this.currentMonthlyProduction).subscribe(
      _ => this.currentMonthlyProduction = this.editIndex = null
    )
  }
  deleteData(id: number) {
    this.confirmDialog.show().then(
      res => {
        if (res) {
          this.mPSV.delete(id);
        }
      }
    )
  }
}
