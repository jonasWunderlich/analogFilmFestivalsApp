import { createAction, props } from '@ngrx/store';

export const enteredScreeningEventDetails = createAction(
  '[ScreeningEventDetails] ScreeningEvent Details entered',
  props<{ id: string }>()
);
