import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../services/darkmode-service.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  menu: boolean = false;
  darkmode: boolean = true;

  constructor(public darkModeService: DarkmodeService) {}

  ngOnInit(): void {
    this.darkmode = this.darkModeService.getDarkMode();
  }

  switchMenu(): void {
    document.getElementById('menuBody')?.classList.toggle('hidden');
    document.getElementById('menuBody')?.classList.toggle('visible');
    
    this.menu = !this.menu;
  }

  switchDarkMode($event: any): void {
    this.darkModeService.setDarkMode($event.checked);
  }

}
