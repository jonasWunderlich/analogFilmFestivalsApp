import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { selectRouteParams } from 'src/app/routing-module/+state/router/router.reducer';
import { neitherNullNorUndefined } from 'src/app/_helpers/null-or-undefined';
import { ScreeningEvent } from 'src/app/_models/screening-event';
import * as fromScreeningEvent from './screening-event.reducer';

export const selectScreeningEventState = createFeatureSelector<fromScreeningEvent.State>(
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

export const selectScreeningEventByIds = (ids: string[]): MemoizedSelector<object, ScreeningEvent[], DefaultProjectorFn<ScreeningEvent[]>> => {
  return createSelector(
    selectScreeningEvents,
    (screeningEvents: ScreeningEvent[] = []): ScreeningEvent[] => screeningEvents.filter(screeningEvent => ids.indexOf(screeningEvent.id) > -1)
  );
};

/* select event via id */

export const selectSelectedScreeningEventId = createSelector(
  selectScreeningEventState,
  (state: fromScreeningEvent.State): string | undefined => state.selectedScreeningEventId
);

export const selectSelectedScreeningEvent = createSelector(
  selectEntities,
  selectSelectedScreeningEventId,
  (entities, entityId): ScreeningEvent | undefined => {
    if (!entityId) {
      return undefined;
    }
    return entities[entityId]
  }
);

/* select via route */

export const selectRoutesScreeningEventId = createSelector(
  selectRouteParams,
  (params): string | undefined => {
    if (neitherNullNorUndefined(params) && neitherNullNorUndefined(params['id'])) {
      return params['id'] as string;
    } else {
      return undefined;
    }
  }
);

export const selectSelectedScreeningEventByRoute = createSelector(
  selectEntities,
  selectRoutesScreeningEventId,
  (entities, entityId): ScreeningEvent | undefined => {
    if (!entityId) {
      console.error('select ScreeningEvent By Route WITHOUT params')
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
