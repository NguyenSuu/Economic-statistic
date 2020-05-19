import { Component, OnInit, ViewChild } from '@angular/core';
import { FieldsService } from './services/fields.service';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { tap } from 'rxjs/operators';
import { Fields } from '../../models/field';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'code', 'name', 'action'];
  field: Fields[] = null;
  editIndex = null;

  currentField: Fields = null;

  oldField: Fields = null;

  constructor(private fieldService: FieldsService, public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '550px',
      data: { field: this.field }
    });
  }
  
  updateField(){
    this.fieldService.update(this.currentField).subscribe(
      _=> this.currentField=this.editIndex=null
    );
  }

  cancelEdit() {
    this.currentField.name = this.oldField.name
    this.currentField.code = this.oldField.code
    this.editIndex = this.currentField = null;
  }

  toggleEdit(index: number, field: Fields) {
    this.editIndex = index

    this.currentField = field

    this.oldField = { ...field }
  }

  deleteField(id: number) {
    this.fieldService.delete(id);
  }

  ngOnInit() {
    this.fieldService.field$.subscribe(l => this.field = l)
  }

}
