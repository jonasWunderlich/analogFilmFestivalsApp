import { TestBed } from '@angular/core/testing';
import { ReportEditService } from './report-edit.service';

describe('ReportEditService', () => {
  let service: ReportEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
