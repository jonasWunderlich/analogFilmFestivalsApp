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

export const searchedMoviesSuccess = createAction(
  '[Movie] searched Movies successfully loaded',
  props<{ movies: TMDbMovieDetails[] | undefined }>()
);

export const searchedMoviesFailed = createAction(
  '[Movie] searched Movies failed',
  props<{ error: string }>()
);

export const loadMovieByIdSuccess = createAction(
  '[Movie] Movie loaded',
  props<{ movie: TMDbMovieDetails | null }>()
);

export const loadMovieByIdFailed = createAction(
  '[Movie] Movie loaded failed',
  props<{ error: string }>()
);

export const loadMoviesByIdsSuccess = createAction(
  '[Movie] Movies loaded',
  props<{ movies: (TMDbMovieDetails | null)[] }>()
);

export const loadMoviesByIdsFailed = createAction(
  '[Movie] Movies loaded failed',
  props<{ error: string }>()
);
