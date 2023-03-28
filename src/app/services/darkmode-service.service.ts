import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  constructor() { }

  setDarkMode(newValue: boolean): void {
    sessionStorage.setItem('darkMode', newValue + '');
    this.toogleDarkModeBody(newValue);
  }

  getDarkMode(): boolean {
    return sessionStorage.getItem('darkMode') == 'true';
  }

  private toogleDarkModeBody(newValue: boolean): void {
    console.log('toogle')

    if(newValue == true) {
      if(!document.body.classList.contains("dark"))
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
    } else if (!newValue) {
      if(document.body.classList.contains("dark"))
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
    }
  }
}
