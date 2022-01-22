import { TestBed } from '@angular/core/testing';

import { HeroHTTPService } from './hero-http.service';

describe('HeroHTTPService', () => {
  let service: HeroHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
