import { Injectable } from '@angular/core';
import { ScreeningEventCreate } from 'src/app/core/_models/screening-event';
import { ScreeningEventService } from '../screening-event.service';

@Injectable({
  providedIn: 'root',
})
export class ScreeningEventCreateService {
  constructor(private readonly common: ScreeningEventService) {}

  create(screeningEvent: ScreeningEventCreate): void {
    this.common.create(screeningEvent);
  }
}
