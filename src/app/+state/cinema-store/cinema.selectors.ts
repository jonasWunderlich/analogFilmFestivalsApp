import {
  createFeatureSelector,
  createSelector,
  DefaultProjectorFn,
  MemoizedSelector,
} from '@ngrx/store';
import { selectRouteParams } from 'src/app/+state/routing-store/router.reducer';
import { neitherNullNorUndefined } from 'src/app/core/utilities/null-or-undefined';
import { Cinema } from 'src/app/core/_models/cinema';
import * as fromCinema from './cinema.reducer';
import { selectActiveScreeningEvent } from '../screening-event-store/screening-event.selectors';
import { selectReferencedObjects } from 'src/app/core/utilities/store-selectors.utilities';

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

/* select cinemas via id */

export const selectCinemasByIds = (
  ids: string[]
): MemoizedSelector<object, Cinema[], DefaultProjectorFn<Cinema[]>> => {
  return createSelector(selectCinemas, (cinemas: Cinema[] = []): Cinema[] =>
    cinemas.filter((cinema) => ids.indexOf(cinema.id) > -1)
  );
};

/* select cinema via id */

export const selectActiveCinemaId = createSelector(
  selectCinemaState,
  (state: fromCinema.State): string | undefined => {
    return state.activeCinemaId;
  }
);

export const selectActiveCinema = createSelector(
  selectEntities,
  selectActiveCinemaId,
  (entities, entityId): Cinema | undefined => {
    if (!entityId) {
      return undefined;
    }
    return entities[entityId];
  }
);

/* select via route */

export const selectRouterCinemaId = createSelector(
  selectRouteParams,
  (params): string | undefined => {
    if (
      neitherNullNorUndefined(params) &&
      neitherNullNorUndefined(params['id'])
    ) {
      return params['id'] as string;
    } else {
      return undefined;
    }
  }
);

export const selectSelectedCinemaByRouter = createSelector(
  selectEntities,
  selectRouterCinemaId,
  (entities, entityId): Cinema | undefined => {
    if (!entityId) {
      console.error('select Cinema By Route WITHOUT params');
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

export const selectCinemasOnMap = createSelector(
  selectCinemaState,
  selectCinemas,
  (state, cinemas): Cinema[] => {
    return selectReferencedObjects(cinemas, state.cinemasOnMap);
  }
);

export const selectScreeningEventCinemas = createSelector(
  selectActiveScreeningEvent,
  selectCinemas,
  (event, cinemas): Cinema[] => {
    return event?.cinemaRefs
      ? selectReferencedObjects(cinemas, event?.cinemaRefs)
      : [];
  }
);
