import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TypeData } from '../../../models/type-data';
import { TypeDataService } from '../services/type-data.service';

@Component({
  selector: 'app-dialog-type-data',
  templateUrl: './dialog-type-data.component.html',
  styleUrls: ['./dialog-type-data.component.scss']
})
export class DialogTypeDataComponent implements OnInit {

  form:FormGroup;
  constructor(public dialogRef: MatDialogRef<DialogTypeDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TypeData,
    private typeDataSv: TypeDataService,private formBuilder:FormBuilder
  ) {}

  ngOnInit() {
    this.form=this.formBuilder.group(
      {
        code:[''],
        name:['']
      }
    )
  }
  onNoClick(){
    this.dialogRef.close();
  }
  submit(){
    const typeData:TypeData=this.form.value
    this.typeDataSv.add(typeData)
    this.dialogRef.close();

  }
}
