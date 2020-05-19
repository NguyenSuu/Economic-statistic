import { StatisticDataService } from './statistic-data.service';
import { StatisticService } from './statistic.service';

export const services= [
    StatisticService,
    StatisticDataService
]

export * from './statistic-data.service'
export * from './statistic.service'