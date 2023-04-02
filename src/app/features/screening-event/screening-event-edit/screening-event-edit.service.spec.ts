import { TestBed } from '@angular/core/testing';
import { ScreeningEventEditService } from './screening-event-edit.service';

describe('ScreeningEventEditService', () => {
  let service: ScreeningEventEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreeningEventEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
