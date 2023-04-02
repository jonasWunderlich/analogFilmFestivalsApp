import { createAction } from '@ngrx/store';
import { ReportCreate } from 'src/app/core/_models/report';

export const triggerReportUpdate = createAction(
  '[ReportService] Update Report triggered',
  (id: string, report: ReportCreate) => ({ id, report })
);

export const triggerReportCreation = createAction(
  '[ReportService] Create Report triggered',
  (report: ReportCreate) => ({ report })
);

export const triggerReportRemoval = createAction(
  '[ReportService] Delete Report triggered',
  (id: string) => ({ id })
);
