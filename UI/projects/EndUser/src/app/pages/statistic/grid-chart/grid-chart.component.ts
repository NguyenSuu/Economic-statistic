import { Component, OnInit } from '@angular/core';

export var single = [
  {
    name: 'Germany',
    value: 8940000
  },
  {
    name: 'USA',
    value: 5000000
  },
  {
    name: 'France',
    value: 7200000
  },
  {
    name: 'UK',
    value: 6200000
  },
  {
    name: 'Italy',
    value: 4200000
  },
  {
    name: 'Spain',
    value: 8200000
  },
  {
    name: 'Germany',
    value: 8940000
  },
  {
    name: 'USA',
    value: 5000000
  },
  {
    name: 'France',
    value: 7200000
  },
  {
    name: 'UK',
    value: 6200000
  },
  {
    name: 'Italy',
    value: 4200000
  },
  {
    name: 'Spain',
    value: 8200000
  },
];

@Component({
  selector: 'app-grid-chart',
  templateUrl: './grid-chart.component.html',
  styleUrls: ['./grid-chart.component.scss']
})
export class GridChartComponent {
  single: any[];
  view: any[] = [900, 400];

  // options
  showLegend = true;
  showLabels = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }
}
