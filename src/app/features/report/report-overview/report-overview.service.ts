import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectReports } from 'src/app/+state/report-store/report.selectors';
import { ReportService } from '../report.service';
import { enteredReportOverview } from './report-overview.actions';
import { first } from 'rxjs';
import { updateCinemasOnMap } from 'src/app/+state/cinema-store/cinema.actions';

@Injectable({
  providedIn: 'root',
})
export class ReportOverviewService {
  reports$ = this.store.select(selectReports);

  constructor(
    private readonly store: Store,
    private readonly common: ReportService
  ) {}

  delete(id: string): void {
    this.common.delete(id);
  }

  dispatch(): void {
    this.store.dispatch(enteredReportOverview());
    this.reports$.pipe(first()).subscribe((report) => {
      // TODO: find more elegant way to dispatch id collection
      const cinemaRefs = report
        .filter((event) => event.cinemaRef)
        .map((ev) => ev.cinemaRef);
      const withoutDuplicates = [...new Set(cinemaRefs)] as string[];
      this.store.dispatch(updateCinemasOnMap({ ids: withoutDuplicates }));
    });
  }
}
