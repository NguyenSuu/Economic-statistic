import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { District } from '../../../models/district';
import { QuanHuyenService } from '../services/quan-huyen.service';

@Component({
  selector: 'app-district-dialog',
  templateUrl: './district-dialog.component.html',
  styleUrls: ['./district-dialog.component.scss']
})
export class DistrictDialogComponent implements OnInit {

  form:FormGroup;
  constructor(public dialogRef: MatDialogRef<DistrictDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: District,
    private districtSv: QuanHuyenService,private formBuilder:FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      districts: this.formBuilder.array([])
    })
    this.addMore()
  }
  get districtsControl() {
    return this.form.controls.districts as FormArray;
  }
  addMore() {
    this.districtsControl.push(this.formBuilder.group({
      name: [''],
      code:[''],
    }));
  }
  onNoClick(){  
    this.dialogRef.close();
  }
  submit(){
    const {districts} = this.form.value
    this.districtSv.add(districts)
    this.dialogRef.close();

  }

}
