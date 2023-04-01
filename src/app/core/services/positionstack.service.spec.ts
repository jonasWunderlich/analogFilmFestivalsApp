import { TestBed } from '@angular/core/testing';

import { PositionstackService } from './positionstack.service';

describe('PositionstackService', () => {
  let service: PositionstackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositionstackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
