import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectCinemas } from '../../root-store/cinema-store/cinema.selectors';

@Component({
  selector: 'app-cinema-overview',
  templateUrl: './cinema-overview.component.html',
  styleUrls: ['./cinema-overview.component.scss'],
})
export class CinemaOverviewComponent implements OnDestroy {
  cinemas$ = this.store.select(selectCinemas);
  subscription = new Subscription();

  constructor(private readonly store: Store) {}

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
