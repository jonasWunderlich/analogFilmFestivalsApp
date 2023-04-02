import { TestBed } from '@angular/core/testing';
import { CinemaDetailsService } from './cinema-details.service';

describe('CinemaDetailsService', () => {
  let service: CinemaDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
