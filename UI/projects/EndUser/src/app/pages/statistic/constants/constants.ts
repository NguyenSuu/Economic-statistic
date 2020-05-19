import { MileStone } from '../models/statistic';

export const START_YEAR = 2017;

export enum TimeType {
    Month = 'MONTH',
    Quarter = 'QUARTER'
}

export const mileStones: MileStone[] = [
    {
        name: 'Cả năm',
        code: 'YEAR'
    },
    {
        name: 'Quý 1',
        code: 'Q1'
    },
    {
        name: 'Tháng 1',
        code: 'T1'
    },
    {
        name: 'Tháng 2',
        code: 'T2'
    },
    {
        name: 'Tháng 3',
        code: 'T3'
    },
    {
        name: 'Quý 2',
        code: 'Q2'
    },
    {
        name: 'Tháng 4',
        code: 'T4'
    },
    {
        name: 'Tháng 5',
        code: 'T5'
    },
    {
        name: 'Tháng 6',
        code: 'T6'
    },
    {
        name: 'Quý 3',
        code: 'Q3'
    },
    {
        name: 'Tháng 7',
        code: 'T7'
    },
    {
        name: 'Tháng 8',
        code: 'T8'
    },
    {
        name: 'Tháng 9',
        code: 'T9'
    },
    {
        name: 'Quý 4',
        code: 'Q4'
    },
    {
        name: 'Tháng 10',
        code: 'T10'
    },
    {
        name: 'Tháng 11',
        code: 'T11'
    },
    {
        name: 'Tháng 12',
        code: 'T12'
    },
]