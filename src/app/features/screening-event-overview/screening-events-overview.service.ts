import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCinemas } from 'src/app/root-store/cinema-store/cinema.selectors';
import { selectScreeningEvents } from 'src/app/root-store/screening-event-store/screening-event.selectors';

@Injectable({
  providedIn: 'root',
})
export class ScreeningEventsOverviewService {
  cinemas$ = this.store.select(selectCinemas);
  screeningEvents$ = this.store.select(selectScreeningEvents);

  constructor(private readonly store: Store) {}
}
