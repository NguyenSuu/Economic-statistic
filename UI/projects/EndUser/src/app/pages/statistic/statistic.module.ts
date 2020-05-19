import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Libs */
import { BsDropdownModule } from 'ngx-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';

/** App Declares */
import { StatisticRoutingModule } from './statistic-routing.module';
import { StatisticComponent } from './statistic.component';
import { GridChartComponent } from './grid-chart/grid-chart.component';
import { PieChartsComponent } from './pie-charts/pie-charts.component';
import { StatisticTableComponent } from './statistic-table/statistic-table.component';
import { FormsModule } from '@angular/forms';
import { VerticalBarChartsComponent } from './vertical-bar-charts/vertical-bar-charts.component';
import { ZoneItemComponent } from './zone-item/zone-item.component';
import { LibModule } from '../../@lib/lib.module';
import { services } from "./services"

@NgModule({
  declarations: [StatisticComponent, PieChartsComponent, GridChartComponent, StatisticTableComponent, VerticalBarChartsComponent, ZoneItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    StatisticRoutingModule,
    BsDropdownModule,
    NgxChartsModule,
    LibModule
  ],
  providers: [
    ...services
  ]
})
export class StatisticModule {}
