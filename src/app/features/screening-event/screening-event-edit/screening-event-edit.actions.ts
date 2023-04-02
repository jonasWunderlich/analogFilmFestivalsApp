import { createAction, props } from '@ngrx/store';

export const enteredScreeningEventEdit = createAction(
  '[ScreeningEventEdit] ScreeningEvent Edit entered',
  props<{ id: string }>()
);
