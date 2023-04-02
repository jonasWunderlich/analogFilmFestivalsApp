import { TestBed } from '@angular/core/testing';
import { ScreeningEventCreateService } from './screening-event-create.service';

describe('ScreeningEventCreateService', () => {
  let service: ScreeningEventCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreeningEventCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
