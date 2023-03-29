import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCinemas } from '../../../root-store/cinema-store/cinema.selectors';
import { selectReports } from '../../../root-store/report-store/selectors/report.selectors';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportOverviewComponent {
  reports$ = this.store.select(selectReports);
  cinemas$ = this.store.select(selectCinemas);

  constructor(private readonly store: Store) {}
}
