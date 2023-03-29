import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCinemas } from 'src/app/root-store/cinema-store/cinema.selectors';

@Injectable({
  providedIn: 'root',
})
export class CinemaOverviewService {
  cinemas$ = this.store.select(selectCinemas);

  constructor(private readonly store: Store) {}
}
