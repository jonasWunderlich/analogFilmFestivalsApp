import { createAction, props } from '@ngrx/store';

export const setActiveCinemaId = createAction(
  '[Cinema Details] Active Cinema set',
  props<{ cinemaId: string }>()
);
