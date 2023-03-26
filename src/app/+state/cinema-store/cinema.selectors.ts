import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCinema from './cinema.reducer';

export const selectCinemaState = createFeatureSelector<fromCinema.State>(
  fromCinema.cinemaFeatureKey
);

const {
  selectEntities: selectEntitiesProjection,
  selectAll: selectAllProjection,
} = fromCinema.cinemaAdapter.getSelectors();

/* select Entites */

export const selectEntities = createSelector(
  selectCinemaState,
  selectEntitiesProjection
);

export const selectCinemas = createSelector(
  selectCinemaState,
  selectAllProjection
);

/* Loading States */

export const selectCinemaLoadingStates = createSelector(
  selectCinemaState,
  (state) => state.loadingStates
);

export const selectCinemaLoading = createSelector(
  selectCinemaLoadingStates,
  (state) => state.loadingCinema
);

export const selectCinemasLoading = createSelector(
  selectCinemaLoadingStates,
  (state) => state.loadingCinemas
);
