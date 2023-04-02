import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCinemas } from 'src/app/+state/cinema-store/cinema.selectors';
import { CinemaService } from '../cinema.service';
import { enteredCinemaOverview } from './cinema-overview.actions';

@Injectable({
  providedIn: 'root',
})
export class CinemaOverviewService {
  cinemas$ = this.store.select(selectCinemas);

  constructor(
    private readonly store: Store,
    private readonly common: CinemaService
  ) {
    this.store.dispatch(enteredCinemaOverview());
  }

  delete(id: string): void {
    this.common.delete(id);
  }
}
