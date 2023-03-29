import { TestBed } from '@angular/core/testing';

import { CinemaOverviewService } from './cinema-overview.service';

describe('CinemaOverviewService', () => {
  let service: CinemaOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
