import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JavaScripterModule } from 'javascripter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JavaScripterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
