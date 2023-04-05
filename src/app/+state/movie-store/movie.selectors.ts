import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMovie from './movie.reducer';

export const selectMovieState = createFeatureSelector<fromMovie.MoviesState>(
  fromMovie.movieFeatureKey
);

export const selectIdSearchedMovie = createSelector(
  selectMovieState,
  (state: fromMovie.MoviesState): any => state.movieById || undefined
);

export const selectQuerySearchedMovies = createSelector(
  selectMovieState,
  (state: fromMovie.MoviesState): any => state.moviesByQuery || []
);

export const selectIdSearchedMovies = createSelector(
  selectMovieState,
  (state: fromMovie.MoviesState): any => state.moviesById || []
);

export const selectScreeningEventMovies = createSelector(
  selectMovieState,
  (state: fromMovie.MoviesState): any => state.moviesByQuery || []
);
