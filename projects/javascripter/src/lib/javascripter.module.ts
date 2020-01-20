import { NgModule, ModuleWithProviders } from '@angular/core';
import { JavaScripterService } from '../lib/javascripter.service';
import { Options, DEFAULT_OPTIONS, OPTIONS } from './types';

@NgModule({
  providers: [
    JavaScripterService,
    {
      provide: OPTIONS,
      useValue: DEFAULT_OPTIONS,
    }
  ]
})
export class JavaScripterModule {
  static forRoot(options: Options = DEFAULT_OPTIONS): ModuleWithProviders {
    return {
      ngModule: JavaScripterModule,
      providers: [
        {
          provide: OPTIONS,
          useValue: options },
      ]
    };
  }
}
