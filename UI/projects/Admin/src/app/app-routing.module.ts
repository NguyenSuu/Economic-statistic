import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './@core/layouts/admin-layout/admin-layout.component';
import { AuthService } from './@core/services/auth.service';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthService],
    children: [
     
      {
        path: 'monthly-production',
        loadChildren: () => import('./modules/monthly-production/monthly-production.module').then(m => m.MonthlyProductionModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'product-line',
        loadChildren: () => import('./modules/product-line/product-line.module').then(m => m.ProductLineModule)
      },
      {
        path: 'units',
        loadChildren: () => import('./modules/units/units.module').then(m => m.UnitsModule)
      },
      {
        path: 'type-data',
        loadChildren: () => import('./modules/type-data/type-data.module').then(m => m.TypeDataModule)
      },
      {
        path: 'fields',
        loadChildren: () => import('./modules/fields/fields.module').then(m => m.FieldsModule)
      },
      {
        path: 'district',
        loadChildren: () => import('./modules/quan-huyen/quan-huyen.module').then(m => m.QuanHuyenModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
