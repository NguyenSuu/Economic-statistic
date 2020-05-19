import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductLine } from '../../../models/product-line';
import { ProductLineService } from '../services/product-line.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductLine,
    private pLSv: ProductLineService, private formBuilder: FormBuilder
  ) { }
  field_id: any = null;
  onNoClick(): void {
    this.dialogRef.close({

    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      productLines: this.formBuilder.array([])

    })
    this.addMore();
  }
  get productLinesControl() {
    return this.form.controls.productLines as FormArray;
  }
  addMore() {
    this.productLinesControl.push(this.formBuilder.group({
      name: [''],
      code: ['', Validators.required],
      f_id: ['']
    }))
  }
  submit() {
    const {productLines} = this.form.value;
    const newProductLines = productLines.map(
      e => {
        return {
          ...e,
          f_id: this.field_id
        }
      }
    )
    
    this.pLSv.add(newProductLines);
    this.dialogRef.close();
  }


}
