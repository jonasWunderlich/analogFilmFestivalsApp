import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectCinemas,
  selectCinemasLoading,
} from 'src/app/+state/cinema-store/cinema.selectors';
import { CinemaService } from '../cinema.service';
import { enteredCinemaOverview } from './cinema-overview.actions';

@Injectable()
export class CinemaOverviewService {
  cinemas$ = this.store.select(selectCinemas);
  loading$ = this.store.select(selectCinemasLoading);

  constructor(
    private readonly store: Store,
    private readonly common: CinemaService
  ) {}

  public dispatchEnter(): void {
    this.store.dispatch(enteredCinemaOverview());
  }

  public delete(id: string): void {
    this.common.delete(id);
  }
}
