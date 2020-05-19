import { Component, OnInit } from '@angular/core';
import { UnitsService } from './services/units.service';
import { Units } from '../../models/units';
import { ConfirmDialogService } from '../../@lib/services/confirm-dialog.service';
import { MatDialog } from '@angular/material';
import { DialogUnitComponent } from './dialog-unit/dialog-unit.component';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  displayedColumns: string[] = ["position", "code", "name", "sign", "action"]
  constructor(private unitsSv: UnitsService,private dialog:MatDialog, private confirm: ConfirmDialogService) { }
  unit: Units[] = null;
  editIndex = null;
  currentUnit: Units = null;
  oldUnit: Units = null;
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogUnitComponent, {
      width: '750px',
      height:'200px',
      data: { unit: this.unit }
    });
  }
  ngOnInit() {
    this.unitsSv.unit$.subscribe(l => this.unit = l)
  }
  toggleEdit(index: number, unit: Units) {
    this.editIndex = index;
    this.currentUnit = unit;
    this.oldUnit = { ...unit };
  }
  updateUnit() {
    this.unitsSv.update(this.currentUnit).subscribe(
      _=>this.currentUnit=this.editIndex=null
    )
  }
  cancelEdit() {
    this.currentUnit.code = this.oldUnit.code;
    this.currentUnit.name = this.oldUnit.name;
    this.currentUnit.sign = this.oldUnit.sign;
    this.editIndex = this.currentUnit = null;
  }
  deleteUnit(id: number) {
    this.confirm.show().then(res => {
        if (res) {
          this.unitsSv.delete(id);
        }
      }
    )
  }
}
