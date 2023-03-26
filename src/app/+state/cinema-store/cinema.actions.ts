import { createAction, props } from '@ngrx/store';
import { Cinema } from 'src/app/_models/cinema';

export const loadCinemas = createAction(
  '[Cinema] Load Cinemas'
);

export const loadCinemasSucceeded = createAction(
  '[Cinema] Cinemas successfully loaded',
  props<{ cinemas: Cinema[] }>()
);

export const loadCinemasFailed = createAction(
  '[Cinema] load Cinemas failed',
  props<{ error: string }>()
);

export const loadCinemaById = createAction(
  '[Cinema] Load Cinemas',
  (id: string) => ({ id })
);

export const loadCinemaByIdSucceeded = createAction(
  '[Cinema] Cinema successfully loaded',
  props<{ cinema: Cinema }>()
);

export const loadCinemaByIdFailed = createAction(
  '[Cinema] load Cinema failed',
  props<{ error: string }>()
);
