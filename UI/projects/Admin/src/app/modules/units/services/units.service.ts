import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Units } from '../../../models/units';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const DOMAIN="";

@Injectable()
export class UnitsService {
  unitsSubject=new BehaviorSubject<Units[]>([]);

  constructor(private http:HttpClient) {
    this.getList();
  
  }
  get unit$(){
    return this.unitsSubject.asObservable();
  }
  getList(){
    this.http.get(DOMAIN+"units").subscribe(
      (res:any)=>this.unitsSubject.next(res)
    )
  }
  update(unit:Units){
    return this.http.patch(DOMAIN+"units",unit).pipe(
      tap(
        (res:any)=>{
          const {value}=this.unitsSubject
          const index=value.findIndex(e=>e.id==unit.id)
          const newList=[...value]
          newList[index]=unit
          this.unitsSubject.next(newList)
        }
      )
    )
  }
  add(unit:Units){
    this.http.post(DOMAIN+"units",unit).subscribe(
      (res:any)=>{
        const newList=[res,...this.unitsSubject.value];
        {
          this.unitsSubject.next(newList)
        }
      }
    )
  }
  delete(id:number){
    this.http.delete(DOMAIN+"units/"+id).subscribe(
      (res:any)=>{
        const {value}=this.unitsSubject;
        const newList=value.filter(e=>e.id!=id);
        this.unitsSubject.next(newList);
      }
    )
  }
}
