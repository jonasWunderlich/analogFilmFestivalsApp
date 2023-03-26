import { createAction, props } from '@ngrx/store';
import { Report } from 'src/app/_models/report';

export const loadReports = createAction(
  '[Report] Load Reports'
);

export const loadReportsSucceeded = createAction(
  '[Movie] Reports successfully loaded',
  props<{ reports: Report[] }>()
);

export const loadReportsFailed = createAction(
  '[Movie] load Reports failed',
  props<{ error: string }>()
);

export const loadReportById = createAction(
  '[Report] Load Reports',
  (id: string) => ({ id })
);

export const loadReportByIdSucceeded = createAction(
  '[Movie] Report successfully loaded',
  props<{ report: Report }>()
);

export const loadReportByIdFailed = createAction(
  '[Movie] load Report failed',
  props<{ error: string }>()
);
