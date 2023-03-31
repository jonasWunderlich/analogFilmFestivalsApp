import { TestBed } from '@angular/core/testing';

import { ReportCreateService } from './report-create.service';

describe('ReportCreateService', () => {
  let service: ReportCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
