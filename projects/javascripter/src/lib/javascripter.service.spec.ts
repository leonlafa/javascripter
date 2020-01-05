import { TestBed } from '@angular/core/testing';

import { JavascripterService } from './javascripter.service';

describe('JavascripterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JavascripterService = TestBed.get(JavascripterService);
    expect(service).toBeTruthy();
  });
});
