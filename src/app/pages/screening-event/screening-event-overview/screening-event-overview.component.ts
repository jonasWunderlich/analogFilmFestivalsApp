import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { ScreeningEventsOverviewService } from './screening-events-overview.service';

@Component({
  selector: 'app-screening-event-overview',
  templateUrl: './screening-event-overview.component.html',
  styleUrls: ['./screening-event-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreeningEventOverviewComponent {
  calendarOptions: CalendarOptions = {};
  cinemas$ = this.screeningEventsService.cinemas$;
  screeningEvents$ = this.screeningEventsService.screeningEvents$;

  constructor(
    private readonly screeningEventsService: ScreeningEventsOverviewService
  ) {}
}
