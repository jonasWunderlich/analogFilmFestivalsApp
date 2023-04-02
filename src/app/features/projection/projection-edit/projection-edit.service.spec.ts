import { TestBed } from '@angular/core/testing';
import { ProjectionEditService } from './projection-edit.service';

describe('ProjectionEditService', () => {
  let service: ProjectionEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectionEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
