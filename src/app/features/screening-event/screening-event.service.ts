import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { sample } from 'lodash';
import { Observable, of } from 'rxjs';
import { selectCinemas } from 'src/app/root-store/cinema-store/cinema.selectors';
import { searchMoviesByQuery } from 'src/app/root-store/movie-store/movie.actions';
import { selectSearchedMovies } from 'src/app/root-store/movie-store/movie.selectors';
import { selectActiveScreeningEvent } from 'src/app/root-store/screening-event-store/screening-event.selectors';
import { MOCKED_TMDB_QUERIES } from 'src/app/shared/_mock/constants';
import { ScreeningEventCreate } from 'src/app/shared/_models/screening-event';
import { setActiveScreeningEvent } from './screening-event-details/screening-event-details.actions';

@Injectable({
  providedIn: 'root',
})
export class ScreeningEventService {
  event$ = this.store.select(selectActiveScreeningEvent);
  cinemas$ = this.store.select(selectCinemas);
  movies$ = this.store.select(selectSearchedMovies);

  constructor(private readonly store: Store) {
    this.store.dispatch(
      searchMoviesByQuery(sample(MOCKED_TMDB_QUERIES) || 'ass')
    );
  }

  setActiveScreeningEvent(id: string | undefined): void {
    id &&
      this.store.dispatch(
        setActiveScreeningEvent({
          screeningEventId: id,
        })
      );
  }

  create(
    screeningEvent: ScreeningEventCreate
  ): Observable<ScreeningEventCreate> {
    // TODO: dispatch create screeningEvent
    console.log('dispatch | create screeningEvent:', screeningEvent);
    return of(screeningEvent);
  }

  update(
    screeningEvent: ScreeningEventCreate
  ): Observable<ScreeningEventCreate> {
    console.log(screeningEvent);
    return of(screeningEvent);
  }
}
