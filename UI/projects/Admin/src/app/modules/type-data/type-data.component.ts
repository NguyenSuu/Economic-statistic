import { Component, OnInit } from '@angular/core';
import { TypeData } from '../../models/type-data';
import { TypeDataService } from './services/type-data.service';
import { ConfirmDialogService } from '../../@lib/services/confirm-dialog.service';
import { DialogTypeDataComponent } from './dialog-type-data/dialog-type-data.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-type-data',
  templateUrl: './type-data.component.html',
  styleUrls: ['./type-data.component.scss']
})
export class TypeDataComponent implements OnInit {
  displayedColumns: string[] = ["position", "code", "name", "action"]
  typeData: TypeData[] = null;
  editIndex = null;
  currentTypeData: TypeData = null;
  oldTypeData: TypeData = null;
  constructor(private typeDataSv: TypeDataService, private confirmDialog: ConfirmDialogService, private dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogTypeDataComponent, {
      data: { typeData: this.typeData }
    });
  }
  ngOnInit() {
    this.typeDataSv.typeData$.subscribe(l => this.typeData = l)
  }
  toggleEdit(id: number, typeData: TypeData) {
    this.editIndex = id
    this.currentTypeData = typeData
    this.oldTypeData = { ...typeData }
  }
  cancelEdit() {
    this.currentTypeData.code = this.oldTypeData.code;
    this.currentTypeData.name = this.oldTypeData.name;
    this.editIndex = this.currentTypeData = null;
  }
  updateTypeData() {
    this.typeDataSv.update(this.currentTypeData).subscribe(
      _ => this.currentTypeData = this.editIndex = null
    )
  }
  deleteTyteData(id: number) {
    this.confirmDialog.show().then(
      res => {
        if (res) {
          this.typeDataSv.delete(id)
        }
      }
    )
  }
}
