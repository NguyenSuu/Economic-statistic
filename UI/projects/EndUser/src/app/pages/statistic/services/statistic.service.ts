import { Injectable } from '@angular/core';
import { ShowType } from '../models/show-type';
import { BehaviorSubject, of } from 'rxjs';
import { START_YEAR, mileStones } from '../constants/constants';
import { Zone, ZoneType, MileStone, Industry } from '../models/statistic';
import { StatisticValue, industries } from '../mocks/data.mock';
import { Router, ActivatedRoute } from '@angular/router';

import { filter } from 'rxjs/operators';

export interface StatisticState {
  year: number;
  mileStone: MileStone;
  industry: Industry;
  zone: Zone;
  showType: ShowType;
}

const initialState: StatisticState = {
  year: new Date().getFullYear(),
  mileStone: mileStones[0],
  showType: ShowType.Table,
  industry: industries[0],
  zone: {
    zoneId: 1,
    name: 'Tỉnh Thừa Thiên Huế',
    zoneType: ZoneType.Province
  }
};

@Injectable()
export class StatisticService {
  private statisticStateSubject = new BehaviorSubject<StatisticState>(initialState);

  private statisticConfig = {
    yearList: [],
    timeList: []
  };

  constructor(private router: Router, private route: ActivatedRoute) {
    this.setYearList();

    const { nam, kieu, ky } = this.route.snapshot.queryParams;

    this.statisticStateSubject.next({
      ...initialState,
      year: nam || initialState.year,
      showType: kieu || initialState.showType,
    });

    this.statisticStateSubject
      .asObservable()
      .subscribe(_ => this.onRouterChange());
  }

  /** Getter */
  get statisticState$() {
    return this.statisticStateSubject.asObservable().pipe(filter(e => !!e));
  }

  get config() {
    return this.statisticConfig;
  }

  get zoneList$() {
    return of(StatisticValue.map(e => e.zone));
  }

  get industryList$() {
    return of(industries);
  }

  get year() {
    const { value } = this.statisticStateSubject;
    const { year, showType, industry, mileStone } = value;
    return value.year;
  }

  get mileStone() {
    const { value } = this.statisticStateSubject;
    const { year, showType, industry, mileStone } = value;
    return value.year;
  }

  get allState() {
    const { value } = this.statisticStateSubject;
    
    return value
  }

  /** Setter */
  setYear(year: number) {
    const value = this.statisticStateSubject.value;
    this.statisticStateSubject.next({
      ...value,
      year
    });
  }

  setMileStone(mileStone: MileStone) {
    const { value } = this.statisticStateSubject;

    this.statisticStateSubject.next({
      ...value,
      mileStone
    });
  }

  setIndustry(industry: Industry) {
    const { value } = this.statisticStateSubject;

    this.statisticStateSubject.next({
      ...value,
      industry
    });
  }

  /** Fetcher */
  fetchZone() {}

  toggleShowType() {
    const value = this.statisticStateSubject.value;
    value.showType =
      value.showType === ShowType.Chart ? ShowType.Table : ShowType.Chart;

    this.statisticStateSubject.next({ ...value });
  }

  private setYearList() {
    /** Set Year List */
    let year = START_YEAR;
    const thisYear = new Date().getFullYear();

    const yearList = [];

    while (year <= thisYear) {
      yearList.unshift(year++);
    }

    this.config.yearList = yearList;

    /** Set Time List */

    this.config.timeList = mileStones;
  }

  onRouterChange() {
    if (!this.statisticStateSubject.value) {
      return;
    }
    const { value } = this.statisticStateSubject;
    const { year, showType, industry, mileStone } = value;

    console.log(mileStone.code)
    console.log(value)

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        nam: year,
        kieu: showType,
        nganhId: industry.id,
        ky: mileStone.code
      },
      queryParamsHandling: 'merge'
    });


  }


}
