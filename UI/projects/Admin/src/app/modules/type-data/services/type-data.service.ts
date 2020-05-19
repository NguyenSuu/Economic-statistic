import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { TypeData } from '../../../models/type-data';
import { tap } from 'rxjs/operators';
const DOMAIN = ""
@Injectable()
export class TypeDataService {
  typeDataSubject = new BehaviorSubject<TypeData[]>([])
  get typeData$() {
    return this.typeDataSubject.asObservable();
  }
  constructor(private http: HttpClient) {
    this.getList();
  }

  getList() {
    this.http.get("type-data").subscribe(
      (res: any) => this.typeDataSubject.next(res)
    )
  }
  add(typeData: TypeData) {
    this.http.post("type-data", typeData).subscribe(
      (res: any) => {
        const newList = [res, ...this.typeDataSubject.value];
        {
          this.typeDataSubject.next(newList)
        }
      }
    )
  }
  update(typeData: TypeData) {
    return this.http.patch("type-data", typeData).pipe(
      tap(
        (res: any) => {
          const { value } = this.typeDataSubject
          const index = value.findIndex(e => e.id == typeData.id)
          const newList = [...value]
          newList[index] = typeData
          this.typeDataSubject.next(newList)
        }
      )
    )
  }
  delete(id: number) {
    this.http.delete("type-data/" + id).subscribe(
      (res: any) => {
        const { value } = this.typeDataSubject
        const newList = value.filter(e => e.id != id)
        this.typeDataSubject.next(newList)
      }
    )
  }
}