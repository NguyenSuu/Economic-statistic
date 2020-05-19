import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { QuanHuyenService } from './services/quan-huyen.service';
import { District } from '../../models/district';
import { MatDialog, PageEvent } from '@angular/material';
import { DistrictDialogComponent } from './district-dialog/district-dialog.component';


@Component({
  selector: 'app-quan-huyen',
  templateUrl: './quan-huyen.component.html',
  styleUrls: ['./quan-huyen.component.scss']
})
export class QuanHuyenComponent implements OnInit {
  displayedColumns: string[] = ['position', 'code', 'name', 'delete'];
  
  district: District[] = null;

  showDistrict: District[] = []

  editCurrentIndex = null;

  oldCurrentDstrict: District = null;

  currentDistrict: District = null;

  form: FormGroup

  // Pagination
  pageSize = 5
  pageSizeOptions = [2, 5, 10, 25]
  pageEvent: PageEvent
  length = 1000

  constructor(private formBuilder: FormBuilder, private quanHuyenService: QuanHuyenService,private dialog:MatDialog) {
    
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DistrictDialogComponent, {
      data: { district: this.district }
    });
  }
  addDistrict() {
    const {districts} = this.form.value
    
    this.quanHuyenService.add(districts);
  }

  cancelEdit(){
    this.currentDistrict.name=this.oldCurrentDstrict.name;
    this.currentDistrict.code=this.oldCurrentDstrict.code;
    this.editCurrentIndex=this.currentDistrict=null;
  }
  toggleEdit(index:number,district:District){
    this.editCurrentIndex=index;
    this.currentDistrict=district;
    this.oldCurrentDstrict={...district};
  }

  deleteDistrict(id: number) {
    this.quanHuyenService.delete(id);
  }

  updateDistrict() {
    this.quanHuyenService.update(this.currentDistrict).subscribe(
      _ => this.currentDistrict = this.editCurrentIndex = null
    );
  }

  ngOnInit() {
    this.quanHuyenService.district$
      .subscribe(l => {
        this.district = l
        const {pageSize, } = this
        this.onChangePage({
          length: this.district.length,
          pageSize,
          pageIndex: 0,
          previousPageIndex: null
        })
      })
  }


  onChangePage({length,
    pageIndex,
    pageSize,
    previousPageIndex}) {
      console.log(length,
        pageIndex,
        pageSize,
        previousPageIndex)
      this.showDistrict = [...this.district].slice(pageIndex  * pageSize, pageIndex  * pageSize + pageSize)
  }

}
