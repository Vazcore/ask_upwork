import { Component } from '@angular/core';
import { ThemeStateService } from '../state/theme-state';

@Component({
  selector: 'app-color-toggle',
  templateUrl: './color-toggle.component.html',
  styleUrls: ['./color-toggle.component.css']
})
export class ColorToggleComponent {
  isDarkMode = false;

  constructor(
    private themeState: ThemeStateService,
  ) {}

  toggleColorMode() {
    this.isDarkMode = !this.isDarkMode;
    this.themeState.toggleDarkMode(this.isDarkMode);
    
  }
}
