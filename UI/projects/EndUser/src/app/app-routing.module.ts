import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'thong-ke',
    loadChildren: () =>
      import('./pages/statistic/statistic.module').then(m => m.StatisticModule)
  },
  {
    path: '',
    redirectTo: 'thong-ke',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
