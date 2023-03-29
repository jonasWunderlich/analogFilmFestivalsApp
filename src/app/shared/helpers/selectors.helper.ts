import {
  createFeatureSelector,
  createSelector,
  DefaultProjectorFn,
  MemoizedSelector,
  State,
} from '@ngrx/store';
import { selectRouteParams } from 'src/app/root-store/routing-store/router.reducer';
import { ScreeningEvent } from '../_models/screening-event';
import { neitherNullNorUndefined } from './null-or-undefined.helper';

interface GenericWithId {
  id: string;
}

export const selectScreeningEventState =
  createFeatureSelector<fromScreeningEvent.State>(
    fromScreeningEvent.screeningEventFeatureKey
  );

const {
  selectEntities: selectEntitiesProjection,
  selectAll: selectAllProjection,
} = fromScreeningEvent.screeningEventAdapter.getSelectors();

/* select Entites */

export const selectEntities = createSelector(
  selectScreeningEventState,
  selectEntitiesProjection
);

export const selectScreeningEvents = createSelector(
  selectScreeningEventState,
  selectAllProjection
);

/* select screeningEvent via id */

export const selectScreeningEventByIds = <GenericWithId>(
  ids: string[]
): MemoizedSelector<
  object,
  Array<GenericWithId>,
  DefaultProjectorFn<Array<GenericWithId>>
> => {
  return createSelector(
    MemoizedSelector<object, unknown, (s1: State) => unknown>,
    (items: Array<GenericWithId> = []): Array<GenericWithId> =>
      items.filter((item) => ids.indexOf(item.id) > -1)
  );
};

/* select event via id */

export const selectActiveScreeningEventId = createSelector(
  selectScreeningEventState,
  (state: fromScreeningEvent.State): string | undefined =>
    state.activeScreeningEventId
);

export const selectActiveScreeningEvent = createSelector(
  selectEntities,
  selectActiveScreeningEventId,
  (entities, entityId): ScreeningEvent | undefined => {
    if (!entityId) {
      return undefined;
    }
    return entities[entityId];
  }
);

/* select via route */

export const selectRouterScreeningEventId = createSelector(
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

export const selectSelectedScreeningEventByRouter = createSelector(
  selectEntities,
  selectRouterScreeningEventId,
  (entities, entityId): ScreeningEvent | undefined => {
    if (!entityId) {
      console.error('select ScreeningEvent By Route WITHOUT params');
      return undefined;
    }
    return entities[entityId];
  }
);

/* Loading States */

export const selectScreeningEventLoadingStates = createSelector(
  selectScreeningEventState,
  (state) => state.loadingStates
);

export const selectScreeningEventLoading = createSelector(
  selectScreeningEventLoadingStates,
  (state) => state.loadingScreeningEvent
);

export const selectScreeningEventsLoading = createSelector(
  selectScreeningEventLoadingStates,
  (state) => state.loadingScreeningEvents
);
