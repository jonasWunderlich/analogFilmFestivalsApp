import { TestBed } from '@angular/core/testing';
import { ProjectionDetailsService } from './projection-details.service';

describe('ProjectionDetailsService', () => {
  let service: ProjectionDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectionDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
