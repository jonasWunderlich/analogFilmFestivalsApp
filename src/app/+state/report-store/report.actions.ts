import { createAction, props } from '@ngrx/store';
import { Report } from 'src/app/core/_models/report';

export const loadReports = createAction('[Report] Load Reports');

export const loadReportsSucceeded = createAction(
  '[Report] Reports successfully loaded',
  props<{ reports: Report[] }>()
);

export const loadReportsFailed = createAction(
  '[Report] load Reports failed',
  props<{ error: string }>()
);

export const loadReportById = createAction(
  '[Report] Load Reports by Id',
  (id: string) => ({ id })
);

export const loadReportByIdSucceeded = createAction(
  '[Report] Report successfully loaded',
  props<{ report: Report }>()
);

export const loadReportByIdFailed = createAction(
  '[Report] load Report failed',
  props<{ error: string }>()
);
