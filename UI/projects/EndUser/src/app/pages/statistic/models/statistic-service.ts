import { Observable } from 'rxjs';

export interface StatisticServiceInterface {
  /** Fetch static data of Zone */
  fetchStatisticDataOfZone$(): Observable<any>;

  /** Get the children zone of Zone */
  //   fetchChildrenOfZone$(): Observable<any>;

  /** Fetch industries of Zone */
  fetchIndustryOfZone(): Observable<any>;
}
