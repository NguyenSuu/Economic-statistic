import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';
import { StatisticService } from './services/statistic.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
  host: {
    class: 'd-flex flex-row'
  }
})
export class StatisticComponent implements OnInit {
  radioModel = 'Left';
  isOpenMetaMenu = false;

  @ViewChild('metaMenu', { static: false }) metaMenu: ElementRef;
  @ViewChild('toggleButton', { static: false }) toggleButton: ElementRef;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    console.log(this.statisticService.year);
    try {
      if (event.target === this.toggleButton.nativeElement) {
        this.isOpenMetaMenu = !this.isOpenMetaMenu;
        return;
      }
      if (
        this.metaMenu &&
        !this.metaMenu.nativeElement.contains(event.target)
      ) {
        this.isOpenMetaMenu = false;
      }
    } catch {}
  }

  constructor(public statisticService: StatisticService) {
    console.log(this.statisticService.year);
  }

  ngOnInit() {}

  sida() {
    console.log(this.statisticService.year);
  }
}
