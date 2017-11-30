import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { PlayComponent } from './play/play.component';
import { IndexComponent } from './index/index.component';
import { HeadComponent } from './head/head.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    PlayComponent,
    IndexComponent,
    HeadComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"play", component:PlayComponent},
      {path:"home",component:IndexComponent},
      {path:"",pathMatch: "full", redirectTo:"/home"} 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
