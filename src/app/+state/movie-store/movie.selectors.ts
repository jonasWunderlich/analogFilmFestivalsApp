import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import * as fromMovie from './movie.reducer';

export const selectMovieState = createFeatureSelector<fromMovie.MoviesState>(
  fromMovie.movieFeatureKey
);

export const selectSearchedMovies = createSelector(
  selectMovieState,
  (state: fromMovie.MoviesState): any => state.searchedMovies
);
