import { TestBed } from '@angular/core/testing';

import { DarkmodeService } from './darkmode-service.service';

describe('DarkmodeServiceService', () => {
  let service: DarkmodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkmodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
