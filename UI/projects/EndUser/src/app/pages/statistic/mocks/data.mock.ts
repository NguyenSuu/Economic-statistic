import { Statistic, ZoneType, Industry } from '../models/statistic';

export const StatisticValue: Statistic[] = [
  {
    zone: {
      zoneId: 1,
      name: 'Tỉnh Thừa Thiên Huế',
      zoneType: ZoneType.Province
    },
    details: [
      {
        name: 'Sản xuất nông nghiệp',
        value: 5000000
      },
      {
        name: 'Sản xuất công nghiệp',
        value: 6000000
      }
    ]
  },
  {
    zone: {
      zoneId: 2,
      zoneType: ZoneType.District,
      name: 'Huyện Phú Lộc'
    },
    details: [
      {
        name: 'Sản xuất nông nghiệp',
        value: 3000000
      },
      {
        name: 'Sản xuất công nghiệp',
        value: 3000000
      }
    ],
    parentZoneId: 1
  },
  {
    zone: {
      zoneId: 3,
      zoneType: ZoneType.District,
      name: 'Huyện Hương Trà'
    },
    details: [
      {
        name: 'Sản xuất nông nghiệp',
        value: 3000000
      },
      {
        name: 'Sản xuất công nghiệp',
        value: 3000000
      }
    ],
    parentZoneId: 1
  },
  {
    zone: {
      zoneId: 3,
      name: 'Huyện Phú Vang',
      zoneType: ZoneType.District
    },
    details: [
      {
        name: 'Sản xuất nông nghiệp',
        value: 3000000
      },
      {
        name: 'Sản xuất công nghiệp',
        value: 3000000
      }
    ],
    parentZoneId: 1
  }
];

export const industries: Industry[] = [
  {
    id: null,
    name: 'Tổng quan'
  },
  {
    id: 1,
    name: 'Sản xuất nông nghiệp'
  },
  {
    id: 2,
    name: 'Sản xuất công nghiệp'
  }
];
