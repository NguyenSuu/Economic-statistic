import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

export const single = [
  {
    name: 'Germany VietNam Inc.',
    value: 894
  },
  {
    name: 'USA',
    value: 500
  },
  {
    name: 'France',
    value: 720
  },
  {
    name: 'Brazil',
    value: 894
  },
  {
    name: 'Vietnam',
    value: 500
  },
  {
    name: 'Russia',
    value: 400
  },
  {
    name: 'Bulgaria',
    value: 894
  },
  {
    name: 'Philippine',
    value: 500
  }
];

@Component({
  selector: 'app-vertical-bar-charts',
  templateUrl: './vertical-bar-charts.component.html',
  styleUrls: ['./vertical-bar-charts.component.scss']
})
export class VerticalBarChartsComponent implements AfterViewInit {
  single: any[];
  multi: any[];

  view: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: [
      '#294F82',
      '#294F82',
      '#294F82',
      '#294F82',
      '#294F82',
      '#294F82',
      '#294F82',
      '#294F82'
    ]
  };

  constructor(private ref: ElementRef) {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }

  ngAfterViewInit() {
    this.view = [this.ref.nativeElement.offsetWidth, 400];
  }
}
