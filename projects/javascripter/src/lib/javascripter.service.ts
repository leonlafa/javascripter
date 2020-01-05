import { Injectable } from '@angular/core';
import { Subject, Observable, forkJoin } from 'rxjs';
import { Colors, Messages } from './types';

@Injectable({
  providedIn: 'root'
})
export class JavascripterService {
  private onLoaded$: Subject<any>[] = []

  public get onLoaded(): Observable<any> {
    return forkJoin(this.onLoaded$.map(loaded => loaded))
  }

  public createScript(url: string): void {
    this.createSubject(0);
    const script = this.createElement(url);
    this.listenToEvents(script, url, 0);
  }

  public createScripts(urls: string[]) {
    console.log('%c JavaScripter ', `color:${Colors.JavScriptYellow}`)

    urls.forEach((url, id) => {
      const script = this.createElement(url);
      this.createSubject(id);
      this.listenToEvents(script, url, id);
    });
  }

  private createSubject(id) {
    const subject = new Subject<any>();
    this.onLoaded$[id] = subject;
  }

  private createElement(url: string) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.async = true;
    document.head.appendChild(script);
    return script;
  }

  private listenToEvents(script: HTMLElement, url, id) {
    script.onload = () => {
      console.log(`%c ${url} %c ✅`, 'color: #fff', `color: ${Colors.Success}`)
      this.onLoaded$[id].next(url)
      this.onLoaded$[id].complete();
    };

    script.onerror = () => {
      console.log(`%c ${url} %c ❌`, 'color: #fff', `color: ${Colors.Error}`)
      this.onLoaded$[id].error(Messages.FailedToLoad + url);
      this.onLoaded$[id].complete();
    };
  }
}

//Options {logger: boolean, exit: boolean, timeOut: number}
