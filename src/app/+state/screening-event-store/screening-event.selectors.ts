import { createFeatureSelector, createSelector } from '@ngrx/store';
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
