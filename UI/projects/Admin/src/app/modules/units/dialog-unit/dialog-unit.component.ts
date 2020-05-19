import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Units } from '../../../models/units';
import { UnitsService } from '../services/units.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-unit',
  templateUrl: './dialog-unit.component.html',
  styleUrls: ['./dialog-unit.component.scss']
})
export class DialogUnitComponent implements OnInit {
  form:FormGroup;
  constructor(public dialogRef:MatDialogRef<DialogUnitComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Units,
    private unitSv:UnitsService,
    private formBuider:FormBuilder) { }
  onNoClick(){
    this.dialogRef.close();
  }
  submit(){
    const unit:Units=this.form.value;
    this.unitSv.add(unit);
    this.dialogRef.close();
  }
  ngOnInit() {
    this.form=this.formBuider.group({
      code:[''],
      name:[''],
      sign:['']
    })
  }

}
