import { TestBed } from '@angular/core/testing';

import { ScreeningEventDetailsService } from './screening-event-details.service';

describe('ScreeningEventDetailsService', () => {
  let service: ScreeningEventDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreeningEventDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
