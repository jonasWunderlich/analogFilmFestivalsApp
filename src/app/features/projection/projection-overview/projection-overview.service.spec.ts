import { TestBed } from '@angular/core/testing';
import { ProjectionOverviewService } from './projection-overview.service';

describe('ProjectionOverviewService', () => {
  let service: ProjectionOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectionOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
