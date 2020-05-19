import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from '../../../models/product';
import { Fields } from '../../../models/field';
import { tap, retry, map } from 'rxjs/operators';
import { Units } from '../../../models/units';
import { ProductLine } from '../../../models/product-line';


const DOMAIN = ""
@Injectable()
export class ProductService {
  productsSubject = new BehaviorSubject<Products[]>([]);
  unitsSubject = new BehaviorSubject<Units[]>([]);
  productLinesSubject = new BehaviorSubject<ProductLine[]>([]);
  fieldsSubject = new BehaviorSubject<Fields[]>([]);
  constructor(private httpCilent: HttpClient) {
    this.getList();
  }
  get product$() {
    return this.productsSubject.asObservable();
  }
  get productLine$() {
    return this.productLinesSubject.asObservable();
  }
  get units$() {
    return this.unitsSubject.asObservable();
  }
  get fields$() {
    return this.fieldsSubject.asObservable();
  }
  getList() {
    const http = this.httpCilent;
    const requests = [
      http.get("products"),
      http.get("units"),
      http.get("product-line"),
      http.get("fields")
    ]

    forkJoin(requests.map(rq => rq.pipe(retry(3)))).subscribe(
      (res: any) => {
        const products: Products[] = res[0];
        const productLine: Units[] = res[1];
        const units: ProductLine[] = res[2];
        const fields: Fields[] = res[3];
        this.productsSubject.next(products)
        this.productLinesSubject.next(units)
        this.unitsSubject.next(productLine)
        this.fieldsSubject.next(fields)
      }
    )
  }
  add(products: Products[]) {
    this.httpCilent.post("products", products).subscribe(
      (res: any) => {
        console.log('them moi thanh cong')
        res.map(
          e => {
            const newList = [e, ...this.productsSubject.value]
            this.productsSubject.next(newList)
          })
      }
    )
  }
  update(product: Products) {
    return this.httpCilent.patch("products", product).pipe(
      tap(
        (res: any) => {
          const { value } = this.productsSubject;

          const index = value.findIndex(e => e.id == product.id);

          const newList:any = [...value];

          newList[index] = product;

          const pL = this.productLinesSubject.value.find(e => e.id == product.pL_id);
          
          product.productLine = pL;

          this.productsSubject.next(newList);
        }
      )
    )
  }
  delete(id: number) {

    this.httpCilent.delete("products/" + id).subscribe(
      (res: any) => {
        const { value } = this.productsSubject;
        const newList = value.filter(e => e.id != id);
        this.productsSubject.next(newList);
      }
    )
  }
}
