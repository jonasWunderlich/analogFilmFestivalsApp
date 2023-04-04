import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectScreeningEvents } from 'src/app/+state/screening-event-store/screening-event.selectors';
import { ScreeningEventService } from '../screening-event.service';
import { first } from 'rxjs';
import { updateCinemasOnMap } from 'src/app/+state/cinema-store/cinema.actions';

@Injectable({
  providedIn: 'root',
})
export class ScreeningEventOverviewService {
  events$ = this.store.select(selectScreeningEvents);

  constructor(
    private readonly store: Store,
    private readonly common: ScreeningEventService
  ) {}

  delete(id: string): void {
    this.common.delete(id);
  }

  dispatch(): void {
    // TODO: find more elegant way to dispatch id collection
    this.events$.pipe(first()).subscribe((screeningEvents) => {
      const cinemaRefs = screeningEvents.map((ev) => ev.cinemaRefs).flat();
      const withoutDuplicates = [...new Set(cinemaRefs)];
      this.store.dispatch(updateCinemasOnMap({ ids: withoutDuplicates }));
    });
  }
}
