import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectActiveCinema } from 'src/app/+state/cinema-store/cinema.selectors';
import { randomDate, sortByISODate } from 'src/app/core/utilities/mock-data';
import { mockProjections } from 'src/app/core/_mock/projection.mock';
import { enteredCinemaDetails } from './cinema-details.actions';
import { ProjectionService } from '../../projection/projection.service';

@Injectable({
  providedIn: 'root',
})
export class CinemaDetailsService {
  cinema$ = this.store.select(selectActiveCinema);
  projections = mockProjections(
    12,
    randomDate(new Date(), new Date(2023, 1, 0)),
    90
  ).sort((a, b) => sortByISODate(a.date, b.date));

  constructor(
    private readonly store: Store,
    private readonly common: ProjectionService
  ) {}

  setActiveId(id: string | undefined): void {
    if (id) {
      this.store.dispatch(enteredCinemaDetails({ id }));
    }
  }

  delete(id: string): void {
    this.common.delete(id);
  }
}
