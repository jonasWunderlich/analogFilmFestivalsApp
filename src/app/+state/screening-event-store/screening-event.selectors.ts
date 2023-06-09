import {
  createFeatureSelector,
  createSelector,
  DefaultProjectorFn,
  MemoizedSelector,
} from '@ngrx/store';
import { selectRouteParams } from 'src/app/+state/routing-store/router.reducer';
import { neitherNullNorUndefined } from 'src/app/core/utilities/null-or-undefined';
import { ScreeningEvent } from 'src/app/core/_models/screening-event';
import * as fromScreeningEvent from './screening-event.reducer';
import { filterEntitiesByIds } from 'src/app/core/utilities/store-selectors.utilities';

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

/* select screeningEvent via ids */

export const selectScreeningEventByIds = (
  ids: string[]
): MemoizedSelector<
  object,
  ScreeningEvent[],
  DefaultProjectorFn<ScreeningEvent[]>
> => {
  return createSelector(
    selectScreeningEvents,
    (screeningEvents: ScreeningEvent[] = []): ScreeningEvent[] =>
      filterEntitiesByIds(ids, screeningEvents)
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
