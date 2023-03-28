import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { Store } from '@ngrx/store';
import { selectCinemas } from '../../../root-store/cinema-store/cinema.selectors';
import { selectScreeningEvents } from '../../../root-store/screening-event-store/screening-event.selectors';

@Component({
  selector: 'app-screening-event-overview',
  templateUrl: './screening-event-overview.component.html',
  styleUrls: ['./screening-event-overview.component.scss'],
})
export class ScreeningEventOverviewComponent {
  calendarOptions: CalendarOptions = {};
  cinemas$ = this.store.select(selectCinemas);
  screeningEvents$ = this.store.select(selectScreeningEvents);

  constructor(private readonly store: Store) {}
}
