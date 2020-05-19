import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    NavComponent,
    SidebarComponent,
    AdminLayoutComponent
  ]
})
export class CoreModule { }
