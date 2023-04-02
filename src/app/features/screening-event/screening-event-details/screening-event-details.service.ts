import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCinemas } from 'src/app/+state/cinema-store/cinema.selectors';
import { searchMoviesByQuery } from 'src/app/+state/movie-store/movie.actions';
import { selectQuerySearchedMovies } from 'src/app/+state/movie-store/movie.selectors';
import { selectActiveScreeningEvent } from 'src/app/+state/screening-event-store/screening-event.selectors';
import { MOCKED_TMDB_QUERIES } from 'src/app/core/_mock/constants';
import { ScreeningEventService } from '../screening-event.service';
import { enteredScreeningEventDetails } from './screening-event-details.actions';
import { sample } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ScreeningEventDetailsService {
  event$ = this.store.select(selectActiveScreeningEvent);
  relatedCinemas$ = this.store.select(selectCinemas);
  relatedMovies$ = this.store.select(selectQuerySearchedMovies);

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