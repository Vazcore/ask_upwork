import { Component } from '@angular/core';
import { ThemeStateService } from '../state/theme-state';

@Component({
  selector: 'app-navbar-first',
  templateUrl: './navbar-first.component.html',
  styleUrls: ['./navbar-first.component.scss']
})
export class NavbarFirstComponent {
  isDarkTheme: boolean = false;

  constructor(
    private themeState: ThemeStateService,
  ) {
    this.themeState.isDarkTheme$.subscribe(_isDark => {
      this.isDarkTheme = _isDark;
    });
  }
}
