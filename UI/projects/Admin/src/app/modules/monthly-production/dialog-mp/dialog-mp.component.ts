import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MonthlyProduction } from '../../../models/monthly-production';
import { MonthlyProductionService } from '../services/monthly-production.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dialog-mp',
  templateUrl: './dialog-mp.component.html',
  styleUrls: ['./dialog-mp.component.scss']
})
export class DialogMPComponent implements OnInit {
  form: FormGroup
  constructor(public dialogRef: MatDialogRef<DialogMPComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MonthlyProduction,
    public mPSV: MonthlyProductionService, private formBuilder: FormBuilder
  ) { }
  month:any=["1","2","3","4","5","6","7","8","9","10","11","12"];
  year:any=null;
  month_value:any=null;
  ngOnInit() {
    this.form = this.formBuilder.group({
      mProduction:this.formBuilder.array([])
    })
    this.addMore();
    // this.mPSV.monthlyProductionsSubject.subscribe(
    //   (res: any) => {
    //     const {productCode, typeDataCode} = res[0]
    //     this.form.patchValue({
    //       productCode,
    //       typeDataCode
    //     })
    //   }
    // )
  }
  get mProductionControl(){
    return this.form.controls.mProduction as FormArray;
  }
  addMore(){
    this.mProductionControl.push(this.formBuilder.group({
      month: [''],
      year: [''],
      data: [''],
      p_id:[''],

    }))
  }
  onNoClick() {
    this.dialogRef.close();
  }
  submit() {
    const {mProduction} = this.form.value;
    const newMProduction=mProduction.map(
      e =>{
        return{
          ...e,
          month:this.month_value,
          year:this.year
        }
      
    })
    this.mPSV.add(newMProduction);
    this.dialogRef.close();
  }
}
