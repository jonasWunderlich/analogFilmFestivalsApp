import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { ScreeningEventOverviewService } from './screening-event-overview.service';

@Component({
  selector: 'app-screening-event-overview',
  templateUrl: './screening-event-overview.component.html',
  styleUrls: ['./screening-event-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreeningEventOverviewComponent {
  calendarOptions: CalendarOptions = {};
  screeningEvents$ = this.facade.events$;
  projections$ = this.facade.projections$;

  constructor(private readonly facade: ScreeningEventOverviewService) {
    this.facade.dispatchEnter();
  }

  delete(id: string) {
    this.facade.delete(id);
  }
}
