import { TestBed } from '@angular/core/testing';
import { ScreeningEventsOverviewService } from './screening-events-overview.service';

describe('ScreeningEventsOverviewService', () => {
  let service: ScreeningEventsOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreeningEventsOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
