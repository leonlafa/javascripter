import { InjectionToken } from '@angular/core';

export enum Colors {
    Error = '#ff0000',
    Inverse = '#fff',
    JavScriptYellow = '#f7df1e',
    Success = '#90f078',
}

export enum Messages {
    FailedToLoad = 'Failed to load '
}

export interface Options {
    logger: boolean;
}

export const DEFAULT_OPTIONS: Options = {
    logger: true
}


export const OPTIONS = new InjectionToken<Options>('Options');