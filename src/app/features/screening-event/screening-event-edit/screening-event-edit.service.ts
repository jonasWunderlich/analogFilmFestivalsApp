import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCinemas } from 'src/app/+state/cinema-store/cinema.selectors';
import { selectQuerySearchedMovies } from 'src/app/+state/movie-store/movie.selectors';
import { selectActiveScreeningEvent } from 'src/app/+state/screening-event-store/screening-event.selectors';
import { ScreeningEventService } from '../screening-event.service';
import { enteredScreeningEventEdit } from './screening-event-edit.actions';
import { ScreeningEventCreate } from 'src/app/core/_models/screening-event';

@Injectable()
export class ScreeningEventEditService {
  activeEventId?: string;
  event$ = this.store.select(selectActiveScreeningEvent);
  cinemas$ = this.store.select(selectCinemas);
  movies$ = this.store.select(selectQuerySearchedMovies);

  constructor(
    private readonly store: Store,
    private readonly common: ScreeningEventService
  ) {}

  setActiveId(id: string | undefined): void {
    if (id) {
      this.store.dispatch(enteredScreeningEventEdit({ id }));
      this.activeEventId = id;
    }
  }

  delete(id: string): void {
    this.common.delete(id);
  }

  update(item: ScreeningEventCreate): void {
    if (this.activeEventId) {
      this.common.update(this.activeEventId, item);
    }
  }
}
