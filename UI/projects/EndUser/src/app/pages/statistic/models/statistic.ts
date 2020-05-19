export enum ZoneType {
  Province = 'Province',
  District = 'District'
}

export interface ValueDetail {
  name: string;
  value: number;
  color?: string;
}

export interface Zone {
  zoneId: number;
  name: string;
  zoneType: ZoneType;
}

export interface Statistic {
  zone: Zone;
  color?: string;
  details: ValueDetail[];
  children?: Statistic[];
  parentZoneId?: number;
  parent?: Statistic;
}

export interface MileStone {
  name: string;
  code: string;
}

export interface Industry {
  id: number;
  name: string;
}