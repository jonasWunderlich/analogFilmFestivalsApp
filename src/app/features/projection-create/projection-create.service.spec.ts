import { TestBed } from '@angular/core/testing';
import { ProjectionCreateService } from './projection-create.service';

describe('ProjectionCreateService', () => {
  let service: ProjectionCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectionCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
