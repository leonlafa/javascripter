import { NgModule, ModuleWithProviders } from '@angular/core';
import { JavascripterService } from '../lib/javascripter.service';
import { Options, DEFAULT_OPTIONS, OPTIONS } from './types';

@NgModule({
  providers: [
    JavascripterService,
    {
      provide: OPTIONS,
      useValue: DEFAULT_OPTIONS,
    }
  ]
})
export class JavascripterModule {
  static forRoot(options: Options ): ModuleWithProviders {
    return {
      ngModule: JavascripterModule,
      providers: [
        { 
          provide: OPTIONS, 
          useValue: options },
      ]
    };
  }
}
