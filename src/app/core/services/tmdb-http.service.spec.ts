import { TestBed } from '@angular/core/testing';

import { TmdbHttpService } from './tmdb-http.service';

describe('TmdbHttpService', () => {
  let service: TmdbHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmdbHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
