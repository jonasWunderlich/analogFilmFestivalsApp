import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectReports } from 'src/app/+state/report-store/report.selectors';
import { ReportService } from '../report.service';
import { enteredReportOverview } from './report-overview.actions';

@Injectable({
  providedIn: 'root',
})
export class ReportOverviewService {
  reports$ = this.store.select(selectReports);

  constructor(
    private readonly store: Store,
    private readonly common: ReportService
  ) {}

  public dispatchEnter(): void {
    this.store.dispatch(enteredReportOverview());
  }

  public delete(id: string): void {
    this.common.delete(id);
  }
}
