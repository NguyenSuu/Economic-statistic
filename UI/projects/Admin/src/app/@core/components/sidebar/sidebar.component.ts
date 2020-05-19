import { Component, OnInit } from '@angular/core';
import { RouterInfo, ROUTEINFOS } from '../../constants';
import { AuthService } from '../../services/auth.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  routerList: RouterInfo[] = ROUTEINFOS;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  get userName$() {
    return this.authService.authDetail$.pipe(map(data => data.sub))
  }

}
