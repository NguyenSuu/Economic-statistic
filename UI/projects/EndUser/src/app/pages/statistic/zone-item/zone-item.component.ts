import { Component, OnInit, Input } from '@angular/core';
import { Zone } from '../models/statistic';

@Component({
  selector: 'app-zone-item',
  templateUrl: './zone-item.component.html',
  styleUrls: ['./zone-item.component.scss']
})
export class ZoneItemComponent implements OnInit {
  @Input() zone: Zone = null;

  constructor() {}

  ngOnInit() {}
}
