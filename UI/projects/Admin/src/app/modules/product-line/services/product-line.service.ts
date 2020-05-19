import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { ProductLine } from '../../../models/product-line';
import { HttpClient } from '@angular/common/http';
import { Fields } from '../../../models/field';
import { tap, map } from 'rxjs/operators';
import { ConfirmDialogService } from '../../../@lib/services/confirm-dialog.service';
const getFieldRelationship = (fieldId: number | string, fieldList: Fields[]) => {
  return fieldList.find(e => e.code == fieldId)
}

@Injectable()
export class ProductLineService {
  private productLineSubject = new BehaviorSubject<ProductLine[]>([]);
  private fieldSubject = new BehaviorSubject<Fields[]>([]);

  constructor(private httpClient: HttpClient) {
    this.getList();
  }
  get productLine$() {
    return this.productLineSubject.asObservable();
  }

  get fields$() {
    return this.fieldSubject.asObservable();
  }

  add(products: ProductLine[]) {
    this.httpClient.post("product-line", products).subscribe(
      (res: any) => {
        res.map(e=>{
          const newList = [e, ...this.productLineSubject.value];
          this.productLineSubject.next(newList);
        }
        )
      }
    )
  }
  delete(id: number) {
    this.httpClient.delete("product-line/" + id).subscribe(
      (res: any) => {
        const { value } = this.productLineSubject
        const newList = value.filter(e => e.id != id)
        this.productLineSubject.next(newList)
      }
    )
  }
  update(productL: ProductLine) {
    return this.httpClient.patch("product-line", productL).pipe(
      tap(
        (res: any) => {
          const { value } = this.productLineSubject;

          const index = value.findIndex(e => e.id == productL.id);

          let newList: any = [...value];
          
          newList[index] = productL;

          const field = this.fieldSubject.value.find(e => e.id == productL.f_id);

          productL.field = field;


          this.productLineSubject.next(newList);

        }
      )
    )
  }
  getList() {
    const http = this.httpClient;
    const requests = [
      http.get("product-line"),
      http.get("fields")
    ]

    forkJoin(requests).subscribe(
      (res: any) => {
        const productLine: ProductLine[] = res[0];
        const fields: Fields[] = res[1];
        this.productLineSubject.next(productLine);
        this.fieldSubject.next(fields);
      }
    )
  }
}
