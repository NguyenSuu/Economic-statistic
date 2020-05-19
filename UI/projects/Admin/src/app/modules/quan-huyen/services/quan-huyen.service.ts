import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { District } from '../../../models/district';

const DOMAIN = ""

@Injectable()
export class QuanHuyenService {
  districtsSubject = new BehaviorSubject<District[]>([]);

  constructor(private httpClient: HttpClient) {
    this.getList();
   }

  get district$() {
    return this.districtsSubject.asObservable();
  }

  getList() {
    this.httpClient.get("districts").subscribe(
      (res:any) => this.districtsSubject.next(res)
    )
  }

  add(districts : District[]) {
    this.httpClient.post("districts", districts).subscribe(
      (res: any) => {
        const newList: District[] = [...res, ...this.districtsSubject.value];

        this.districtsSubject.next(newList);
      }
    )

  }

  update(district: District) {
    return this.httpClient.patch("districts", district).pipe(
      tap(
        (r: any) => {
          const {value} = this.districtsSubject
  
          const index = value.findIndex(e => e.id == district.id)
  
          const newList = [...value];
  
          newList[index] = district;
  
          this.districtsSubject.next(newList)
        }
      )
    )
  }

  delete(id: number) {
    this.httpClient.delete("districts/"+id).subscribe(
      (res:any)=> {
        const { value } = this.districtsSubject

        const newList = value.filter(e => e.id != id)

        this.districtsSubject.next(newList)
      }
    )
  }
}
