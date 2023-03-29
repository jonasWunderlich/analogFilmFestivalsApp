import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCinemas } from 'src/app/root-store/cinema-store/cinema.selectors';
import { selectReports } from 'src/app/root-store/report-store/report.selectors';

@Injectable({
  providedIn: 'root',
})
export class ReportOverviewService {
  reports$ = this.store.select(selectReports);
  cinemas$ = this.store.select(selectCinemas);

  constructor(private readonly store: Store) {}
}
