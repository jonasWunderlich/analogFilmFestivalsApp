import { Component, OnDestroy } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectCinemas } from '../../root-store/cinema-store/cinema.selectors';
import { selectScreeningEvents } from '../../root-store/screening-event-store/screening-event.selectors';

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.scss'],
})
export class EventOverviewComponent implements OnDestroy {
  calendarOptions: CalendarOptions = {};
  cinemas$ = this.store.select(selectCinemas);
  screeningEvents$ = this.store.select(selectScreeningEvents);
  subscription = new Subscription();

  constructor(private readonly store: Store) {}

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
