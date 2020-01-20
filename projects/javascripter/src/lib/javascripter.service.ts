import {
  Injectable,
  Inject
} from '@angular/core';
import {
  Subject,
  Observable,
  forkJoin
} from 'rxjs';
import {
  Colors,
  Messages,
  Options,
  OPTIONS
} from './types';

@Injectable({
  providedIn: 'root'
})
export class JavaScripterService {
  constructor(@Inject(OPTIONS) public options: Options) { }

  private onLoaded$: Subject<any>[] = []

  /**
   *  Returns an observable when all scripts have loaded
   *  @return Observable<Boolean> loaded
   */
  public get onLoaded(): Observable<any> {
    return forkJoin(this.onLoaded$.map(loaded => loaded))
  }

  /**
   *  Creates a single script
   *  @param string url
   *  @param Options options
   *  @return void _
   */
  public createScript(url: string, options: Options = this.options): void {
    this.createSubject(0);
    const script = this.createElement(url);
    this.listenToEvents(script, url, 0, options.logger);
  }


  /**
   *  Creates multiple scripts
   *  @param string[] urls
   *  @param Options options
   *  @return void _
   */
  public createScripts(urls: string[], options: Options = this.options): void {
    if (options.logger) {
      console.log('%c JavaScripter ', `color:${Colors.JavScriptYellow}`)
    }
    urls.forEach((url, id) => {
      const script = this.createElement(url);
      this.createSubject(id);
      this.listenToEvents(script, url, id, options.logger);
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

  private listenToEvents(script: HTMLElement, url, id, logger) {
    script.onload = () => {
      if (logger) {
        console.log(
          `%c ${url} %c ✅`,
          'color: #fff',
          `color: ${Colors.Success}`)
      }
      this.onLoaded$[id].next(url)
      this.onLoaded$[id].complete();
    };

    script.onerror = () => {
      if (logger) {
        console.log(
          `%c ${url} %c ❌`,
          'color: #fff',
          `color: ${Colors.Error}`)
      }
      this.onLoaded$[id].error(Messages.FailedToLoad + url);
      this.onLoaded$[id].complete();
    };
  }
}
