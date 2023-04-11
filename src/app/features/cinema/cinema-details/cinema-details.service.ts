import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectActiveCinema } from 'src/app/+state/cinema-store/cinema.selectors';
import { enteredCinemaDetails } from './cinema-details.actions';
import { selectCinemaProjections } from 'src/app/+state/projection-store/projection.selectors';
import { selectCinemaReports } from 'src/app/+state/report-store/report.selectors';
import { CinemaService } from '../cinema.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CinemaDetailsService {
  cinema$ = this.store.select(selectActiveCinema);
  projections$ = this.store.select(selectCinemaProjections);
  reports$ = this.store.select(selectCinemaReports);
  events$ = of([]);

  constructor(
    private readonly store: Store,
    private readonly common: CinemaService
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
