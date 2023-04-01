import { TMDbMovieDetails, TMDbSearchMovies } from '@igorissen/ngx-tmdb-api';
import { createFeature, createReducer, on } from '@ngrx/store';
import * as MovieActions from './movie.actions';

export const movieFeatureKey = 'movie';

export interface MoviesState {
  movie: TMDbMovieDetails | null;
  searchedMovies: TMDbMovieDetails[] | undefined;
  searchedMoviesById: (TMDbSearchMovies | null)[];
}

export const initialState: MoviesState = {
  movie: null,
  searchedMovies: undefined,
  searchedMoviesById: [],
};

export const reducer = createReducer(
  initialState,
  on(MovieActions.searchMoviesByQuerySuccess, (state: MoviesState, action) => {
    return {
      ...state,
      searchedMovies: action.movies,
    };
  }),
  on(MovieActions.loadMovieByIdSuccess, (state: MoviesState, action) => {
    return {
      ...state,
      movie: action.movie,
    };
  }),
  on(MovieActions.loadMoviesByIdsSuccess, (state: MoviesState, action) => {
    return {
      ...state,
      searchedMoviesById: action.movies,
    };
  })
);

export const movieFeature = createFeature({
  name: movieFeatureKey,
  reducer,
});
