import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarFirstComponent } from './navbar-first/navbar-first.component';
import { SanghaComponent } from './sangha/sangha.component';
import { ColorToggleComponent } from './color-toggle/color-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarFirstComponent,
    SanghaComponent,
    ColorToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
