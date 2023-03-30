import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ScreeningEventCreate } from 'src/app/shared/_models/screening-event';

@Injectable({ providedIn: 'platform' })
export class ScreeningEventCreateService {
  create(
    screeningEvent: ScreeningEventCreate
  ): Observable<ScreeningEventCreate> {
    // TODO: dispatch create screeningEvent
    console.log('dispatch | create screeningEvent:', screeningEvent);
    return of(screeningEvent);
  }
}
