import { createAction, props } from '@ngrx/store';

export const enteredCinemaDetails = createAction(
  '[CinemaDetails] Cinema Details Page entered',
  props<{ id: string }>()
);
