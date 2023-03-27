import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParams } from 'src/app/routing-module/+state/router/router.reducer';
import { neitherNullNorUndefined } from 'src/app/_helpers/null-or-undefined';
import { Cinema } from 'src/app/_models/cinema';
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

/* select cinema via id */

export const selectSelectedCinemaId = createSelector(
  selectCinemaState,
  (state: fromCinema.State): string | undefined => state.selectedCinemaId
);

export const selectSelectedCinema = createSelector(
  selectEntities,
  selectSelectedCinemaId,
  (entities, entityId): Cinema | undefined => {
    if (!entityId) {
      return undefined;
    }
    return entities[entityId]
  }
);

/* select via route */

export const selectRoutesCinemaId = createSelector(
  selectRouteParams,
  (params): string | undefined => {
    if (neitherNullNorUndefined(params) && neitherNullNorUndefined(params['id'])) {
      return params['id'] as string;
    } else {
      return undefined;
    }
  }
);

export const selectSelectedCinemaByRoute = createSelector(
  selectEntities,
  selectRoutesCinemaId,
  (entities, entityId): Cinema | undefined => {
    console.log(entityId, entities)
    if (!entityId) {
      console.error('select Cinema By Route WITHOUT params')
      return undefined;
    }
    return entities[entityId];
  }
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
