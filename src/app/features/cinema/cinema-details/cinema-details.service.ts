import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectActiveCinema } from 'src/app/+state/cinema-store/cinema.selectors';
import { enteredCinemaDetails } from './cinema-details.actions';
import { ProjectionService } from '../../projection/projection.service';
import { selectCinemaProjections } from 'src/app/+state/projection-store/projection.selectors';
import { selectCinemaReports } from 'src/app/+state/report-store/report.selectors';

@Injectable({
  providedIn: 'root',
})
export class CinemaDetailsService {
  cinema$ = this.store.select(selectActiveCinema);
  projections$ = this.store.select(selectCinemaProjections);
  reports$ = this.store.select(selectCinemaReports);

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
