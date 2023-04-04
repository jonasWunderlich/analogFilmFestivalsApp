import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchMoviesByQuery } from 'src/app/+state/movie-store/movie.actions';
import { selectActiveScreeningEvent } from 'src/app/+state/screening-event-store/screening-event.selectors';
import { MOCKED_TMDB_QUERIES } from 'src/app/core/_mock/constants';
import { ScreeningEventService } from '../screening-event.service';
import { enteredScreeningEventDetails } from './screening-event-details.actions';
import { sample } from 'lodash';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreeningEventDetailsService {
  event$ = this.store.select(selectActiveScreeningEvent);
  relatedCinemas$ = of([]); // this.store.select(selectScreeningEventCinemas);
  relatedMovies$ = of([]); // this.store.select(selectScreeningEventMovies);
  relatedProjections$ = of([]); // this.store.select(screeningEventProjections);
  relatedReports = of([]); // this.store.select(selectScreeningEventReports)

  constructor(
    private readonly store: Store,
    private readonly common: ScreeningEventService
  ) {
    this.store.dispatch(
      searchMoviesByQuery(sample(MOCKED_TMDB_QUERIES) || 'ass')
    );
  }

  setActiveId(id: string | undefined): void {
    if (id) {
      this.store.dispatch(enteredScreeningEventDetails({ id }));
    }
  }

  delete(id: string): void {
    this.common.delete(id);
  }
}
