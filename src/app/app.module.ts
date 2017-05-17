import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { MouseCursorComponent } from './components/mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './components/title-box/title-box.component';


import { routing } from "./app.routing";
import { TooltipDirective } from './shared/tooltip.directive';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

//import { BookModule } from "app/book/book.module";

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent,
    TooltipDirective,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
