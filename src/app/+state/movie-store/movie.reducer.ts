import { TMDbMovieDetails } from '@igorissen/ngx-tmdb-api';
import { createFeature, createReducer, on } from '@ngrx/store';
import * as MovieActions from './movie.actions';

export const movieFeatureKey = 'movie';

export interface MoviesState {
  movie: TMDbMovieDetails | null,
  searchedMovies: any,
}

export const initialState: MoviesState = {
  movie: null,
  searchedMovies: null,
};

export const reducer = createReducer(
  initialState,
  on(MovieActions.searchedMoviesSuccess, ((state: MoviesState, action) => {
    return {
      ...state,
      searchedMovies: action.movies
    }
  })),

  on(MovieActions.loadMovieByIdSuccess, ((state, action) => {
    return {
      ...state,
      movie: action.movie
    }
  })),
);

export const movieFeature = createFeature({
  name: movieFeatureKey,
  reducer,
});

