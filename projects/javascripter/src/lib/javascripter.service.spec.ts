import { TestBed } from '@angular/core/testing';
import { JavaScripter } from './javascripter.service';

describe('JavascripterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JavaScripter = TestBed.get(JavaScripter);
    expect(service).toBeTruthy();
  });
});
