import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchMoviesByQuery } from 'src/app/+state/movie-store/movie.actions';
import { selectActiveScreeningEvent } from 'src/app/+state/screening-event-store/screening-event.selectors';
import { MOCKED_TMDB_QUERIES } from 'src/app/core/_mock/constants';
import { ScreeningEventService } from '../screening-event.service';
import { enteredScreeningEventDetails } from './screening-event-details.actions';
import { sample } from 'lodash';
import { selectScreeningEventCinemas } from 'src/app/+state/cinema-store/cinema.selectors';
import { selectScreeningEventReports } from 'src/app/+state/report-store/report.selectors';
import { selectScreeningEventProjections } from 'src/app/+state/projection-store/projection.selectors';
import { selectScreeningEventMovies } from 'src/app/+state/movie-store/movie.selectors';

@Injectable({
  providedIn: 'root',
})
export class ScreeningEventDetailsService {
  event$ = this.store.select(selectActiveScreeningEvent);
  relatedCinemas$ = this.store.select(selectScreeningEventCinemas);
  relatedMovies$ = this.store.select(selectScreeningEventMovies);
  relatedProjections$ = this.store.select(selectScreeningEventProjections);
  relatedReports = this.store.select(selectScreeningEventReports);

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
