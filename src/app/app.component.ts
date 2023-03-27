import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from './services/darkmode-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'port';
  darkMode: boolean = true;

  constructor(public darkModeService: DarkmodeService) {
  }
  
  ngOnInit() {  
    if(!sessionStorage.getItem('darkMode')){
      this.darkModeService.setDarkMode(true);
    }
  }

  checkDarkMode(): void {
    this.darkMode = this.darkModeService.getDarkMode();
  } 
}
