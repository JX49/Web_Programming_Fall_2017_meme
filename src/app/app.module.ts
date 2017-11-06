import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { PlayComponent } from './play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
