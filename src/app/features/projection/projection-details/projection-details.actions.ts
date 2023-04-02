import { createAction, props } from '@ngrx/store';

export const enteredProjectionDetails = createAction(
  '[ProjectionDetails] Projection Details entered',
  props<{ id: string }>()
);
