import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCinemas } from 'src/app/+state/cinema-store/cinema.selectors';
import { selectScreeningEvents } from 'src/app/+state/screening-event-store/screening-event.selectors';

@Injectable({
  providedIn: 'root',
})
export class ScreeningEventsOverviewService {
  cinemas$ = this.store.select(selectCinemas);
  screeningEvents$ = this.store.select(selectScreeningEvents);

  constructor(private readonly store: Store) {}
}
