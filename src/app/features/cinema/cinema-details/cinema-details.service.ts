import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectActiveCinema,
  selectCinemas,
} from 'src/app/+state/cinema-store/cinema.selectors';
import { randomDate, sortByISODate } from 'src/app/core/utilities/mock-data';
import { mockProjections } from 'src/app/core/_mock/projection.mock';
import { Cinema } from 'src/app/core/_models/cinema';
import { enteredCinemaDetails } from './cinema-details.actions';

@Injectable({
  providedIn: 'root',
})
export class CinemaDetailsService {
  activeCinemaId?: string;
  cinema$ = this.store.select(selectActiveCinema);
  cinemas$ = this.store.select(selectCinemas);
  projections = mockProjections(
    12,
    randomDate(new Date(), new Date(2023, 1, 0)),
    90
  ).sort((a, b) => sortByISODate(a.date, b.date));

  constructor(private readonly store: Store, private readonly router: Router) {
    this.store.dispatch(enteredCinemaDetails());
  }
}
