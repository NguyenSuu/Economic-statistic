import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Fields } from '../../../models/field';

const DOMAIN = ""
@Injectable()
export class FieldsService {
  fieldsSubject = new BehaviorSubject<Fields[]>([]);

  get field$() {
    return this.fieldsSubject.asObservable();
  }
  constructor(private httpClient: HttpClient) {
    this.getList();
  }
  getList() {
    this.httpClient.get("fields").subscribe(
      (res: any) => this.fieldsSubject.next(res)
    )
  }
  delete(id: number) {
    this.httpClient.delete('fields/' + id).subscribe(
      (res: any) => {
        const { value } = this.fieldsSubject
        const newList = value.filter(e => e.id != id)
        this.fieldsSubject.next(newList)
      }
    )
  }
  update(field: Fields) {
    return this.httpClient.patch("fields", field).pipe(
      tap(
        (res: any) => {
          const { value } = this.fieldsSubject

          const index = value.findIndex(e => e.id == field.id)

          const newList = [...value]

          newList[index] = field;

          this.fieldsSubject.next(newList)
        }
      )
    )
  }

  addField(field: Fields) {
    this.httpClient.post("fields", field).subscribe(
      (res: any) => {
        const newList = [res, ...this.fieldsSubject.value];
        {
          this.fieldsSubject.next(newList);
        }
      }
    )
  };
}
