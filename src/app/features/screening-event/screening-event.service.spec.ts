import { TestBed } from '@angular/core/testing';
import { ScreeningEventService } from './screening-event.service';

describe('ScreeningEventService', () => {
  let service: ScreeningEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreeningEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
