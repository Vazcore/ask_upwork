import { Component } from '@angular/core';
import { ThemeStateService } from '../state/theme-state';

@Component({
  selector: 'app-sangha',
  templateUrl: './sangha.component.html',
  styleUrls: ['./sangha.component.scss']
})
export class SanghaComponent {
  isDarkTheme: boolean = false;

  constructor(
    private themeState: ThemeStateService,
  ) {
    this.themeState.isDarkTheme$.subscribe(_isDark => {
      this.isDarkTheme = _isDark;
    });
  }
}
