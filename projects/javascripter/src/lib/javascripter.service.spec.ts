import { TestBed } from '@angular/core/testing';
import { JavaScripterService } from './javascripter.service';

describe('JavascripterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JavaScripterService = TestBed.get(JavaScripterService);
    expect(service).toBeTruthy();
  });
});
