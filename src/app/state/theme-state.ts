import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";
import { Injectable } from "@angular/core";

interface ThemeState {
  isDarkTheme: boolean;
}

const initialState: ThemeState = {
  isDarkTheme: false,
}

@Injectable({
  providedIn: "root"
})
export class ThemeStateService {
  private state$: BehaviorSubject<ThemeState>;
  isDarkTheme$: Observable<boolean>;

  constructor() {
    this.state$ = new BehaviorSubject<ThemeState>(initialState);
    this.isDarkTheme$ = this.state$.asObservable().pipe(
      map((state: ThemeState) => state.isDarkTheme),
      distinctUntilChanged(),
    )
  }
  toggleDarkMode(_isDarkTheme: boolean) {
    this.state$.next({
      ...this.state$,
      isDarkTheme: _isDarkTheme,
    });
  }
}