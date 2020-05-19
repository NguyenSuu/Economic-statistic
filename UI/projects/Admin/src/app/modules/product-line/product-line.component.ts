import { Component, OnInit } from '@angular/core';
import { ProductLine } from '../../models/product-line';
import { ProductLineService } from './services/product-line.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { ConfirmDialogService } from '../../@lib/services/confirm-dialog.service';

@Component({
  selector: 'app-product-line',
  templateUrl: './product-line.component.html',
  styleUrls: ['./product-line.component.scss']
})
export class ProductLineComponent implements OnInit {
  displayedColumns: string[] = ['position', 'code', 'name', 'fields', 'delete']

  productLine: ProductLine[] = null;
  editIndex = null;
  currentProductLine: ProductLine = null;
  oldProductLine: ProductLine = null;

  constructor(public pLSv: ProductLineService, public dialog: MatDialog, private confirmDialog: ConfirmDialogService) { }

  updateProduct() {
    this.pLSv.update(this.currentProductLine).subscribe(
      _ => this.currentProductLine = this.editIndex = null
    )
  }

  deleteProductLine(id: number) {
    console.log(id);
    this.confirmDialog.show().then(
      res => {
        if (res) {
          this.pLSv.delete(id);
        }
      }
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { product: this.productLine }
    });
  }

  cancelEdit() {
    this.currentProductLine.code = this.oldProductLine.code;
    this.currentProductLine.name = this.oldProductLine.name;
    this.editIndex = this.currentProductLine = null;
  }

  toggleEdit(index: number, productLine: ProductLine) {
    this.editIndex = index;
    this.currentProductLine = productLine;
    this.oldProductLine = { ...productLine };
  }

  ngOnInit() {
    this.pLSv.productLine$.subscribe(l => {
      this.productLine = l
    })
  }

}
