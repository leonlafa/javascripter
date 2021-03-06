import { Component } from '@angular/core';
import { JavaScripter } from 'javascripter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'javascripter-demo-app';
  constructor(private service: JavaScripter) {
    this.service.createScripts([
      'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.js',
      'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js',
      'https://code.jquery.com/jquery-3.3.1.slim.min.js',
      'https://bad-script.js'
    ])

    service.onLoaded.subscribe((loaded) => {
      // Do something...
    })
  }
}
