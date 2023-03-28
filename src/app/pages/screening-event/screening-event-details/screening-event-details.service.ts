import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { sample } from 'lodash';
import { selectCinemas } from 'src/app/root-store/cinema-store/cinema.selectors';
import { searchMoviesByQuery } from 'src/app/root-store/movie-store/movie.actions';
import { selectSearchedMovies } from 'src/app/root-store/movie-store/movie.selectors';
import { selectActiveScreeningEvent } from 'src/app/root-store/screening-event-store/screening-event.selectors';
import { MOCKED_TMDB_QUERIES } from 'src/app/shared/_mock/constants';
import { setActiveScreeningEvent } from './screening-event-details.actions';

@Injectable({
  providedIn: 'root',
})
export class ScreeningEventDetailsService {
  event$ = this.store.select(selectActiveScreeningEvent);
  cinemas$ = this.store.select(selectCinemas);
  movies$ = this.store.select(selectSearchedMovies);

  constructor(private readonly store: Store) {
    this.store.dispatch(
      searchMoviesByQuery(sample(MOCKED_TMDB_QUERIES) || 'ass')
    );
  }

  public setActiveScreeningEvent(id: string | undefined): void {
    id &&
      this.store.dispatch(
        setActiveScreeningEvent({
          screeningEventId: id,
        })
      );
  }
}
