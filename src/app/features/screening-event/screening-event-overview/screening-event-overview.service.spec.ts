import { TestBed } from '@angular/core/testing';
import { ScreeningEventOverviewService } from './screening-event-overview.service';

describe('ScreeningEventOverviewService', () => {
  let service: ScreeningEventOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreeningEventOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
