import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectCinemas } from '../../root-store/cinema-store/cinema.selectors';
import { selectReports } from '../../root-store/report-store/selectors/report.selectors';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.scss'],
})
export class ReportOverviewComponent implements OnDestroy {
  reports$ = this.store.select(selectReports);
  cinemas$ = this.store.select(selectCinemas);
  subscription = new Subscription();

  constructor(private readonly store: Store) {}

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
