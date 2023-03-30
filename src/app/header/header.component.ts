import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { routes } from '../app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  focus: number;

  constructor(private router: Router) {
    this.router.events.subscribe(newRoute => {
      if(newRoute instanceof NavigationEnd) {
        this.focus = routes.findIndex(route => {
          return route.path.startsWith(newRoute.url.substring(1)) == true;
        });
      }
    });
  }
}
