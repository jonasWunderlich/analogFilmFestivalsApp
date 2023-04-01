import { TMDbMovieDetails, TMDbSearchMovies } from '@igorissen/ngx-tmdb-api';
import { createFeature, createReducer, on } from '@ngrx/store';
import * as MovieActions from './movie.actions';

export const movieFeatureKey = 'movie';

export interface MoviesState {
  movieById: TMDbMovieDetails | null;
  moviesByQuery: TMDbMovieDetails[] | undefined;
  moviesById: (TMDbSearchMovies | null)[];
  loadingStates: {
    searchMovieById: boolean;
    searchMoviesByQuery: boolean;
    searchMoviesByIds: boolean;
  };
}

export const initialState: MoviesState = {
  movieById: null,
  moviesByQuery: undefined,
  moviesById: [],
  loadingStates: {
    searchMovieById: false,
    searchMoviesByQuery: false,
    searchMoviesByIds: false,
  },
};

export const reducer = createReducer(
  initialState,
  /* search MOVIE by ID */
  on(MovieActions.searchMovieById, (state: MoviesState) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        searchMovieById: true,
      },
    };
  }),
  on(MovieActions.searchMovieByIdSuccess, (state: MoviesState, action) => {
    return {
      ...state,
      movieById: action.movie,
      loadingStates: {
        ...state.loadingStates,
        searchMovieById: false,
      },
    };
  }),
  on(MovieActions.searchMovieByIdFailed, (state: MoviesState) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        searchMovieById: false,
      },
    };
  }),
  /* search MOVIES by QUERY */
  on(MovieActions.searchMoviesByQuery, (state: MoviesState) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        searchMoviesByQuery: true,
      },
    };
  }),
  on(MovieActions.searchMoviesByQuerySuccess, (state: MoviesState, action) => {
    return {
      ...state,
      moviesByQuery: action.movies,
      loadingStates: {
        ...state.loadingStates,
        searchMoviesByQuery: false,
      },
    };
  }),
  on(MovieActions.searchMoviesByQueryFailed, (state: MoviesState) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        searchMoviesByQuery: false,
      },
    };
  }),
  /* search MOVIES by IDS */
  on(MovieActions.searchMoviesByIds, (state: MoviesState) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        searchMoviesById: true,
      },
    };
  }),
  on(MovieActions.searchMoviesByIdsSuccess, (state: MoviesState, action) => {
    return {
      ...state,
      moviesById: action.movies,
      loadingStates: {
        ...state.loadingStates,
        searchMoviesByIds: false,
      },
    };
  }),
  on(MovieActions.searchMoviesByIdsFailed, (state: MoviesState) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        searchMoviesByIds: false,
      },
    };
  })
);

export const movieFeature = createFeature({
  name: movieFeatureKey,
  reducer,
});
