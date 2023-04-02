import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { ScreeningEventService } from '../screening-event.service';

@Component({
  selector: 'app-screening-event-overview',
  templateUrl: './screening-event-overview.component.html',
  styleUrls: ['./screening-event-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreeningEventOverviewComponent {
  calendarOptions: CalendarOptions = {};
  cinemas$ = this.screeningEventsService.cinemas$;
  screeningEvents$ = this.screeningEventsService.events$;

  constructor(private readonly screeningEventsService: ScreeningEventService) {}

  delete(id: string) {
    this.screeningEventsService.delete(id);
  }
}
