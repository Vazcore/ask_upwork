import { Component } from '@angular/core';

@Component({
  selector: 'app-color-toggle',
  templateUrl: './color-toggle.component.html',
  styleUrls: ['./color-toggle.component.css']
})
export class ColorToggleComponent {
  isDarkMode = false;

  toggleColorMode() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : '';
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
}
