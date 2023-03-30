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
  actualRoute;

  constructor(private darkModeService: DarkmodeService) {
  }
  
  ngOnInit() {  
    let darkmodeLoad = sessionStorage.getItem('darkMode');
    console.log(darkmodeLoad)

    if(!darkmodeLoad) {
      sessionStorage.setItem('darkMode', 'true');
    }
    else if(darkmodeLoad == 'false'){
      this.darkModeService.setDarkMode(false);
    }
  }

}
