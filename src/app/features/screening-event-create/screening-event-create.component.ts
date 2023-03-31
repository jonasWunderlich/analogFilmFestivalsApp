import { Component } from '@angular/core';
import { ScreeningEventCreate } from 'src/app/shared/_models/screening-event';
import { ScreeningEventService } from '../screening-event-details/screening-event-details.service';

@Component({
  selector: 'app-screening-event-create',
  templateUrl: './screening-event-create.component.html',
  styleUrls: ['./screening-event-create.component.scss'],
})
export class ScreeningEventCreateComponent {
  constructor(private readonly eventService: ScreeningEventService) {}

  create(screeningEvent: ScreeningEventCreate) {
    this.eventService.create(screeningEvent).subscribe();
  }
}
