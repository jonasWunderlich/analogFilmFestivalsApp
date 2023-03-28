import { TMDbMovieDetails, TMDbSearchMovies } from '@igorissen/ngx-tmdb-api';
import { createAction, props } from '@ngrx/store';

export const searchMoviesByQuery = createAction(
  '[Movie] Search Movies',
  (query: string) => ({ query })
);

export const searchedMoviesSuccess = createAction(
  '[Movie] searched Movies successfully loaded',
  props<{ movies: TMDbSearchMovies | null }>()
);

export const searchedMoviesFailed = createAction(
  '[Movie] searched Movies failed',
  props<{ error: string }>()
);

export const loadMovieById = createAction(
  '[Movie] Load Movie',
  (id: string) => ({ id })
);

export const loadMovieByIdSuccess = createAction(
  '[Movie] Movie loaded',
  props<{ movie: TMDbMovieDetails | null }>()
);

export const loadMovieByIdFailed = createAction(
  '[Movie] Movie loaded failed',
  props<{ error: string }>()
);
