import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectActiveCinema,
  selectCinemas,
} from 'src/app/root-store/cinema-store/cinema.selectors';
import {
  randomDate,
  sortByISODate,
} from 'src/app/shared/helpers/mock-data.helper';
import { mockProjections } from 'src/app/shared/_mock/projection.mock';
import { CinemaCreate } from 'src/app/shared/_models/cinema';
import {
  setActiveCinemaId,
  triggerCinemaCreation,
  triggerCinemaRemoval,
  triggerCinemaUpdate,
} from './cinema.actions';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  activeCinemaId?: string;
  cinema$ = this.store.select(selectActiveCinema);
  cinemas$ = this.store.select(selectCinemas);
  projections = mockProjections(
    12,
    randomDate(new Date(), new Date(2023, 1, 0)),
    90
  ).sort((a, b) => sortByISODate(a.date, b.date));

  constructor(private readonly store: Store, private readonly router: Router) {}

  public setActiveCinema(id: string | undefined): void {
    if (id) {
      this.activeCinemaId = id;
      this.store.dispatch(
        setActiveCinemaId({
          cinemaId: id,
        })
      );
    }
  }

  titleExists(name: string): Observable<boolean> {
    return this.cinemas$.pipe(
      map(
        (arr) =>
          !arr.find((c) => {
            console.log(c.title.toLowerCase() === name.toLowerCase());
            return c.title.toLowerCase() === name.toLowerCase();
          })
      )
    );
  }

  create(screeningEvent: CinemaCreate): void {
    this.store.dispatch(triggerCinemaCreation(screeningEvent));
    this.router.navigate(['/cinema']);
  }

  delete(id: string): void {
    this.store.dispatch(triggerCinemaRemoval(id));
    this.router.navigate(['/cinema']);
  }

  update(screeningEvent: CinemaCreate): void {
    if (this.activeCinemaId) {
      this.store.dispatch(
        triggerCinemaUpdate(this.activeCinemaId, screeningEvent)
      );
      this.router.navigate(['/cinema']);
    }
  }
}
