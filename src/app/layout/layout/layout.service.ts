import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCinemasOnMap } from 'src/app/+state/cinema-store/cinema.selectors';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  $selectedGeoData = this.store.select(selectCinemasOnMap);

  constructor(private readonly store: Store) {}
}
