import { TestBed } from '@angular/core/testing';
import { AnalogKinoBackendService } from './analog-kino-http.service';

describe('AnalogKinoBackendService', () => {
  let service: AnalogKinoBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalogKinoBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
