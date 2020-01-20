# JavaScripter

> A library for loading scripts 😄

![](screen-shot.png)

### Usage

```ts
import { Component } from "@angular/core";
import { JavaScripterService } from "projects/javascripter/src/public-api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "javascripter-demo-app";
  constructor(private service: JavaScripterService) {
    this.service.createScripts([
      "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.js",
      "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js",
      "https://code.jquery.com/jquery-3.3.1.slim.min.js"
    ]);

    service.onLoaded.subscribe(loaded => {
      // Do something...
    });
  }
}
```

## Was this lib useful?

If you found this lib _useful_,
please ⭐️the lib to show your appreciation!
<br>
In the spirit of open-source, share this lib with others in the community who might find it useful 😀
