import { Injectable } from '@angular/core';
import { MonthlyProduction } from '../../../models/monthly-production';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { Products } from '../../../models/product';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { ProductLine } from '../../../models/product-line';
const DOMAIN = ""
@Injectable()
export class MonthlyProductionService {
  monthlyProductionsSubject = new BehaviorSubject<MonthlyProduction[]>([])
  productsSubject = new BehaviorSubject<Products[]>([])
  productLineSubject = new BehaviorSubject<ProductLine[]>([])
  get monthlyProduction$() {
    return this.monthlyProductionsSubject.asObservable()
  }
  get products$() {
    return this.productsSubject.asObservable()
  }
  get productLine$() {
    return this.productLineSubject.asObservable()
  }
  constructor(private http: HttpClient) {
    this.getList()
  }

  getList() {
    const request = [
      this.http.get("monthly-production"),
      this.http.get("products"),
      this.http.get("product-line")
    ]
    forkJoin(request).subscribe(
      (res: any) => {
        const monthlyProduction: MonthlyProduction[] = res[0];
        const products: Products[] = res[1];
        const productLine: ProductLine[] = res[2];
        this.monthlyProductionsSubject.next(monthlyProduction);
        this.productsSubject.next(products);
        this.productLineSubject.next(productLine)
      }
    )
  }
  add(mProduction: MonthlyProduction[]){
    console.log(mProduction);
  this.http.post("monthly-production", mProduction).subscribe(
    (res: any) => {
      res.map(
        e => {
          const newList = [e, ...this.monthlyProductionsSubject.value]
          this.monthlyProductionsSubject.next(newList)

        }
      )
    }
  )
}
update(monthlyProduction: MonthlyProduction){
  return this.http.patch("monthly-production", monthlyProduction).pipe(
    tap(
      res => {
        const { value } = this.monthlyProductionsSubject
        const index = value.findIndex(e => e.id == monthlyProduction.id)
        const newList = { ...value }
        newList[index] = monthlyProduction
        this.monthlyProductionsSubject.next(newList)
      }
    )
  )
}
delete (id: number) {
  this.http.delete("monthly-production/" + id).subscribe(
    res => {
      const { value } = this.monthlyProductionsSubject
      const newList = value.filter(e => e.id != id)
      this.monthlyProductionsSubject.next(newList)
    }
  )
}
}
