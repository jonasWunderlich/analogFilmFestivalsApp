import { createAction, props } from '@ngrx/store';

export const enteredCinemaEdit = createAction(
  '[CinemaEdit] Cinema Edit entered',
  props<{ id: string }>()
);
