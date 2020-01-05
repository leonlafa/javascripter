import { Component } from '@angular/core';
import { JavascripterService } from 'projects/javascripter/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'javascripter-demo-app';
  constructor(private service: JavascripterService) {
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
