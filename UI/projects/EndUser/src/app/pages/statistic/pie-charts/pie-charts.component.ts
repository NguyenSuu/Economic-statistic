import { Component, OnInit } from '@angular/core';

export const single = [
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
    name: 'UK',
    value: 6200000
  },
  {
    name: 'UK',
    value: 6200000
  },
  {
    name: 'UK',
    value: 6200000
  },
  {
    name: 'UK',
    value: 6200000
  },
  {
    name: 'UK',
    value: 6200000
  },
];

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.scss']
})
export class PieChartsComponent {
  single: any[];
  view: any[] = [220, 220];

  // options
  gradient = true;
  showLegend = false;
  showLabels = false;
  isDoughnut = false;
  legendPosition = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#f2f2f2', '#e700000', 'green']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
