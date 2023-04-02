import { createAction, props } from '@ngrx/store';

export const enteredReportEdit = createAction(
  '[ReportEdit] Report Edit entered',
  props<{ id: string }>()
);
