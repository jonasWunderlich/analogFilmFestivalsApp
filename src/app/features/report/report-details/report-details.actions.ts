import { createAction, props } from '@ngrx/store';

export const enteredReportDetails = createAction(
  '[ReportDetails] Report Details entered',
  props<{ id: string }>()
);
