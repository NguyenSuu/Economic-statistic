import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Products } from '../../models/product';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { ConfirmDialogService } from '../../@lib/services/confirm-dialog.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'code', 'name','units_id','product_line_id', 'delete'];
  product:Products[]=null;
  editIndex=null;
  currentProduct:Products=null;
  oldProduct:Products=null;
  constructor(public productService:ProductService,public dialog:MatDialog, private confirmDialog: ConfirmDialogService) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { product: this.product }
    });
  }
  cancelEdit(){
    this.currentProduct.code=this.oldProduct.code;
    this.currentProduct.name=this.oldProduct.name;
    this.currentProduct.pL_id=this.oldProduct.pL_id;
    this.currentProduct.u_id=this.oldProduct.u_id;
    this.editIndex=this.currentProduct=null;
  }
  updateProduct(){
    this.productService.update(this.currentProduct).subscribe(
      _=>this.currentProduct=this.editIndex=null
    );
  }
  async deleteProduct(id:number){
    this.confirmDialog.show('Bạn chắc chắn muốn xóa?').then(res => {
      if (res) {
        this.productService.delete(id);
      }
    });    
  }
  toggleEdit(index:number,product:Products){
    this.editIndex=index;
    this.currentProduct=product;
    this.oldProduct={...product};
  }
  ngOnInit() {  
    this.productService.product$.subscribe(l=>this.product=l)

  }

}
