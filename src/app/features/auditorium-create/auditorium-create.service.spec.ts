import { TestBed } from '@angular/core/testing';
import { AuditoriumCreateService } from './auditorium-create.service';

describe('AuditoriumCreateService', () => {
  let service: AuditoriumCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditoriumCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
