import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppComponent } from './app.component';
import { JavascripterModule } from 'projects/javascripter/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JavascripterModule.forRoot({ logger: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
