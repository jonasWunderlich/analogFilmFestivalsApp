import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectActiveReport } from 'src/app/+state/report-store/report.selectors';
import { ReportCreate } from 'src/app/core/_models/report';
import { ReportService } from '../report.service';
import { enteredReportEdit } from './report-edit.actions';

@Injectable({
  providedIn: 'root',
})
export class ReportEditService {
  activeReportId?: string;
  activeReport$ = this.store.select(selectActiveReport);

  constructor(
    private readonly store: Store,
    private readonly common: ReportService
  ) {}

  setActiveId(id: string | undefined): void {
    if (id) {
      this.store.dispatch(enteredReportEdit({ id }));
      this.activeReportId = id;
    }
  }

  delete(id: string): void {
    this.common.delete(id);
  }

  update(item: ReportCreate): void {
    if (this.activeReportId) {
      this.common.update(this.activeReportId, item);
    }
  }
}
