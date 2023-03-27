import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  constructor() { }

  setDarkMode(newValue: boolean): void {
    sessionStorage.setItem('darkMode', newValue + '');
    this.toogleDarkModeBody();
  }

  getDarkMode(): boolean {
    return sessionStorage.getItem('darkMode') == 'true';
  }

  private toogleDarkModeBody(): void {
    console.log('toogle')
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  }
}
