import { Injectable } from '@angular/core';
import { StatisticService } from './statistic.service';

@Injectable()
export class StatisticDataService {

  constructor(private statisticService: StatisticService) { }

  getData() {
    // const {year, mileStone} = this.statisticService

    const { year, mileStone } = this.statisticService.allState

    console.log(
      "Call get data", year, mileStone.code
    )
  }


}
