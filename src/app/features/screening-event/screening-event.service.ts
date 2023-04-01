import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { sample } from 'lodash';
import { selectCinemas } from 'src/app/+state/cinema-store/cinema.selectors';
import { searchMoviesByQuery } from 'src/app/+state/movie-store/movie.actions';
import { selectQuerySearchedMovies } from 'src/app/+state/movie-store/movie.selectors';
import { selectActiveScreeningEvent } from 'src/app/+state/screening-event-store/screening-event.selectors';
import { MOCKED_TMDB_QUERIES } from 'src/app/core/_mock/constants';
import { ScreeningEventCreate } from 'src/app/core/_models/screening-event';
import { setActiveScreeningEvent } from './screening-event-details/screening-event-details.actions';
import {
  triggerScreeningEventCreation,
  triggerScreeningEventRemoval,
  triggerScreeningEventUpdate,
} from './screening-event.actions';

@Injectable({
  providedIn: 'root',
})
export class ScreeningEventService {
  event$ = this.store.select(selectActiveScreeningEvent);
  cinemas$ = this.store.select(selectCinemas);
  movies$ = this.store.select(selectQuerySearchedMovies);
  activeEventId?: string;

  constructor(private readonly store: Store, private readonly router: Router) {
    this.store.dispatch(
      searchMoviesByQuery(sample(MOCKED_TMDB_QUERIES) || 'ass')
    );
  }

  setActiveScreeningEvent(id: string | undefined): void {
    if (id) {
      this.store.dispatch(
        setActiveScreeningEvent({
          screeningEventId: id,
        })
      );
      this.activeEventId = id;
    }
  }

  create(screeningEvent: ScreeningEventCreate): void {
    this.store.dispatch(triggerScreeningEventCreation(screeningEvent));
    this.router.navigate(['/events']);
  }

  delete(id: string): void {
    this.store.dispatch(triggerScreeningEventRemoval(id));
    this.router.navigate(['/events']);
  }

  update(screeningEvent: ScreeningEventCreate): void {
    if (this.activeEventId) {
      this.store.dispatch(
        triggerScreeningEventUpdate(this.activeEventId, screeningEvent)
      );
      this.router.navigate(['/events']);
    }
  }
}
