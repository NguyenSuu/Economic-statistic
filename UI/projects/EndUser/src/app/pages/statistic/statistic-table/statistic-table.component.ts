import { Component, OnInit } from '@angular/core';
import { StatisticDataService } from '../services/statistic-data.service';

@Component({
  selector: 'app-statistic-table',
  templateUrl: './statistic-table.component.html',
  styleUrls: ['./statistic-table.component.scss']
})
export class StatisticTableComponent implements OnInit {

  constructor(private statisticTableSv: StatisticDataService) { }

  ngOnInit() {
  }

  submit() {
    const service = this.statisticTableSv
   
   service.getData();
  }
}
