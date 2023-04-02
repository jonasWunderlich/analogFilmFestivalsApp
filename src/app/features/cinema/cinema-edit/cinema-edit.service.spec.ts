import { TestBed } from '@angular/core/testing';
import { CinemaEditService } from './cinema-edit.service';

describe('CinemaEditService', () => {
  let service: CinemaEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
