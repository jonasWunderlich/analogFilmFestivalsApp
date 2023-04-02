import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCinemasOnMap } from 'src/app/+state/cinema-store/cinema.selectors';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  $selectedCinemasOnMap = this.store.select(selectCinemasOnMap);

  constructor(private readonly router: Router, private readonly store: Store) {}
}
