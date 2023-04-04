import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { ScreeningEventOverviewService } from './screening-event-overview.service';

@Component({
  selector: 'app-screening-event-overview',
  templateUrl: './screening-event-overview.component.html',
  styleUrls: ['./screening-event-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreeningEventOverviewComponent implements OnInit {
  calendarOptions: CalendarOptions = {};
  screeningEvents$ = this.facade.events$;

  constructor(private readonly facade: ScreeningEventOverviewService) {}

  ngOnInit() {
    this.facade.dispatch();
  }

  delete(id: string) {
    this.facade.delete(id);
  }
}
