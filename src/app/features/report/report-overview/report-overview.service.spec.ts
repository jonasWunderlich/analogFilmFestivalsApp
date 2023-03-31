import { TestBed } from '@angular/core/testing';

import { ReportOverviewService } from './report-overview.service';

describe('ReportOverviewService', () => {
  let service: ReportOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
