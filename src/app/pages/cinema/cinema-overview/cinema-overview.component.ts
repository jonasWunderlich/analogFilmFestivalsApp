import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCinemas } from '../../../root-store/cinema-store/cinema.selectors';

@Component({
  selector: 'app-cinema-overview',
  templateUrl: './cinema-overview.component.html',
  styleUrls: ['./cinema-overview.component.scss'],
})
export class CinemaOverviewComponent {
  cinemas$ = this.store.select(selectCinemas);

  constructor(private readonly store: Store) {}
}
