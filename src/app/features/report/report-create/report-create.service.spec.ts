import { TestBed } from '@angular/core/testing';
import { ReportCreateFacadeService } from './report-create.service';

describe('ReportCreateFacadeService', () => {
  let service: ReportCreateFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportCreateFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
