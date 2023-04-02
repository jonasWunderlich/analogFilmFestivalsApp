import { createAction, props } from '@ngrx/store';
import { Report } from 'src/app/core/_models/report';

export const loadReports = createAction('[Report] Load Reports');

export const loadReportsSucceeded = createAction(
  '[Report] All Reports successfully loaded',
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

export const createReportSucceeded = createAction(
  '[Report] Report successfully created',
  props<{ report: Report }>()
);

export const createReportFailed = createAction(
  '[Report] create Report failed',
  props<{ error: string }>()
);

export const updateReportSucceeded = createAction(
  '[Report] Report successfully updated',
  props<{ report: Report }>()
);

export const updateReportFailed = createAction(
  '[Report] update Report failed',
  props<{ error: string }>()
);

export const deleteReportSucceeded = createAction(
  '[Report] Report successfully deleted',
  props<{ id: string }>()
);

export const deleteReportFailed = createAction(
  '[Report] delete Report failed',
  props<{ error: string }>()
);
