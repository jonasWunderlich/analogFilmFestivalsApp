import { Component, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ScreeningEventCreate } from 'src/app/shared/_models/screening-event';

@Component({
  selector: 'app-screening-event-create',
  templateUrl: './screening-event-create.component.html',
  styleUrls: ['./screening-event-create.component.scss'],
})
export class ScreeningEventCreateComponent {
  constructor(private readonly service: ScreeningEventService) {}

  create(screeningEvent: ScreeningEventCreate) {
    this.service
      .create(screeningEvent)
      .subscribe((screeningEvent) =>
        console.log('event created', screeningEvent)
      );
  }
}

@Injectable({ providedIn: 'platform' })
export class ScreeningEventService {
  create(
    screeningEvent: ScreeningEventCreate
  ): Observable<ScreeningEventCreate> {
    return of(screeningEvent);
  }
}
