import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductService } from '../services/product.service';
import { Products } from '../../../models/product';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  form: FormGroup;
  plId: any = null;
  fieldSelectedId = null;
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Products,
    private productSv: ProductService, private formBuilder: FormBuilder
  ) { }
  onNoClick(): void {
    this.dialogRef.close({

    });
  }

  get nganhHienThi$() {
    return this.productSv.productLine$.pipe(
      map(listNganh => {
        return listNganh.filter(e => e.f_id == this.fieldSelectedId)
      })
    )
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      products: this.formBuilder.array([])
    })
    this.addMore();
  }
  get productsControl() {
    return this.form.controls.products as FormArray;
  }
  addMore() {
    this.productsControl.push(this.formBuilder.group({
      name: [''],
      code: ['', Validators.required],
      u_id: [''],
      pL_id: [''],
    }))
  }

  submit() {
    const { products } = this.form.value;

    const newProducts = products.map(
      e => {
        return {
          ...e,
          pL_id: this.plId
        }
      }
    )
    this.productSv.add(newProducts);
    this.dialogRef.close();
  }
}
