import { createAction, props } from '@ngrx/store';
import { Cinema } from 'src/app/shared/_models/cinema';

export const loadCinemas = createAction('[Cinema] Load Cinemas');

export const loadCinemasSucceeded = createAction(
  '[Cinema] Cinemas successfully loaded',
  props<{ cinemas: Cinema[] }>()
);

export const loadCinemasFailed = createAction(
  '[Cinema] load Cinemas failed',
  props<{ error: string }>()
);

export const loadCinemaById = createAction(
  '[Cinema] Load Cinemas by Id',
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

export const createCinemaSucceeded = createAction(
  '[Event] Cinema successfully createed',
  props<{ cinema: Cinema }>()
);

export const createCinemaFailed = createAction(
  '[Event] create Cinema failed',
  props<{ error: string }>()
);

export const updateCinemaSucceeded = createAction(
  '[Event] Cinema successfully updated',
  props<{ cinema: Cinema }>()
);

export const updateCinemaFailed = createAction(
  '[Event] update Cinema failed',
  props<{ error: string }>()
);

export const deleteCinemaSucceeded = createAction(
  '[Event] Cinema successfully deleted',
  props<{ id: string }>()
);

export const deleteCinemaFailed = createAction(
  '[Event] delete Cinema failed',
  props<{ error: string }>()
);
