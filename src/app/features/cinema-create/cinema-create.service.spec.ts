import { TestBed } from '@angular/core/testing';

import { CinemaCreateService } from '../cinema-create/cinema-create.service';

describe('CinemaCreateService', () => {
  let service: CinemaCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
