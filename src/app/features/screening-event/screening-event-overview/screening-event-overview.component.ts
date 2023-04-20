import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { ScreeningEvent } from 'src/app/core/_models/screening-event';
import { ScreeningEventOverviewService } from './screening-event-overview.service';

@Component({
  selector: 'app-screening-event-overview',
  templateUrl: './screening-event-overview.component.html',
  styleUrls: ['./screening-event-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ScreeningEventOverviewService],
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

  trackByEventId(index: number, item: ScreeningEvent): string {
    return item.id;
  }
}
