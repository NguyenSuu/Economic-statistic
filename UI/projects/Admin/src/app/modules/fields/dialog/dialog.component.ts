import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FieldsService } from '../services/fields.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Fields } from '../../../models/field';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  form:FormGroup;
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Fields,
    private fieldSv: FieldsService,private formBuilder:FormBuilder
  ) {}

  onNoClick(): void {
    this.dialogRef.close({
      
    });
  }

  ngOnInit() {
    this.form=this.formBuilder.group({
      name:[''],
      code:['',Validators.required]
    })
  }

  submit() {
    const field:Fields=this.form.value;
    this.fieldSv.addField(field);
    this.dialogRef.close();
  }

}
