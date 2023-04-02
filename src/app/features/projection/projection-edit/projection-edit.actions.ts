import { createAction, props } from '@ngrx/store';

export const enteredProjectionEdit = createAction(
  '[ProjectionEdit] Projection Edit entered',
  props<{ id: string }>()
);
