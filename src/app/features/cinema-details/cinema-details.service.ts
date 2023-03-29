import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectActiveCinema } from 'src/app/root-store/cinema-store/cinema.selectors';
import {
  randomDate,
  sortByDate,
} from 'src/app/shared/helpers/mock-data.helper';
import { mockProjections } from 'src/app/shared/_mock/projection.mock';
import { setActiveCinemaId } from './cinema-details.actions';

@Injectable({
  providedIn: 'root',
})
export class CinemaDetailsService {
  cinema$ = this.store.select(selectActiveCinema);
  projections = mockProjections(
    12,
    randomDate(new Date(), new Date(2023, 1, 0)),
    90
  ).sort((a, b) => sortByDate(a.date, b.date));

  constructor(private readonly store: Store) {}

  public setActiveCinema(id: string | undefined): void {
    id &&
      this.store.dispatch(
        setActiveCinemaId({
          cinemaId: id,
        })
      );
  }
}
