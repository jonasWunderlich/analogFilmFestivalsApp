import { TMDbMovieDetails } from '@igorissen/ngx-tmdb-api';
import { createAction, props } from '@ngrx/store';

export const searchMoviesByQuery = createAction(
  '[Movie] Search Movies',
  (query: string) => ({ query })
);

export const loadMoviesByIds = createAction(
  '[Movie] Load Movies by Id',
  (movieIds: string[]) => ({ movieIds })
);

export const loadMovieById = createAction(
  '[Movie] Load Movie by Id',
  (id: string) => ({ id })
);

/* Succes & Error */

export const searchMoviesByQuerySuccess = createAction(
  '[Movie] searched Movies (by query) successfully',
  props<{ movies: TMDbMovieDetails[] | undefined }>()
);

export const searchMoviesByQueryFailed = createAction(
  '[Movie] searched Movies (by query) failed',
  props<{ error: string }>()
);

export const loadMovieByIdSuccess = createAction(
  '[Movie] searched one Movies (by id) successfully',
  props<{ movie: TMDbMovieDetails | null }>()
);

export const loadMovieByIdFailed = createAction(
  '[Movie] searched one Movies (by id) failed',
  props<{ error: string }>()
);

export const loadMoviesByIdsSuccess = createAction(
  '[Movie] searched multiple Movies (by Array<{id: string}>) successfully',
  props<{ movies: (TMDbMovieDetails | null)[] }>()
);

export const loadMoviesByIdsFailed = createAction(
  '[Movie] searched multiple Movies (by Array<{id: string}>) failed',
  props<{ error: string }>()
);
