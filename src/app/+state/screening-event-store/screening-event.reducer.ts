import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import {
  triggerScreeningEventCreation,
  triggerScreeningEventRemoval,
  triggerScreeningEventUpdate,
} from 'src/app/features/screening-event/screening-event.actions';
import { ScreeningEvent } from 'src/app/core/_models/screening-event';
import * as ScreeningEventActions from './screening-event.actions';
import { enteredScreeningEventDetails } from 'src/app/features/screening-event/screening-event-details/screening-event-details.actions';
import { enteredScreeningEventEdit } from 'src/app/features/screening-event/screening-event-edit/screening-event-edit.actions';
import { enteredScreeningEventOverview } from 'src/app/features/screening-event/screening-event-overview/screening-event-overview.actions';

export const screeningEventFeatureKey = 'screeningEvent';

export interface State extends EntityState<ScreeningEvent> {
  activeScreeningEventId: string | undefined;
  loadingStates: {
    loadingScreeningEvent: boolean;
    loadingScreeningEvents: boolean;
    createScreeningEvent: boolean;
    deleteScreeningEvent: boolean;
    updateScreeningEvent: boolean;
  };
}

export function getScreeingEventId(screeningEvent: ScreeningEvent): string {
  return screeningEvent.id;
}

export const screeningEventAdapter: EntityAdapter<ScreeningEvent> =
  createEntityAdapter<ScreeningEvent>({
    selectId: getScreeingEventId,
  });

export const initialState: State = screeningEventAdapter.getInitialState({
  activeScreeningEventId: undefined,
  loadingStates: {
    loadingScreeningEvent: false,
    loadingScreeningEvents: false,
    createScreeningEvent: false,
    deleteScreeningEvent: false,
    updateScreeningEvent: false,
  },
});

export const reducer = createReducer(
  initialState,
  on(enteredScreeningEventOverview, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingScreeningEvents: true,
      },
    };
  }),
  on(
    enteredScreeningEventDetails,
    enteredScreeningEventEdit,
    (state: State, action) => {
      return {
        ...state,
        activeScreeningEventId: action.id,
        loadingStates: {
          ...state.loadingStates,
          loadingScreeningEvent: true,
        },
      };
    }
  ),
  on(
    ScreeningEventActions.loadScreeningEventsSucceeded,
    (state: State, action) => {
      return screeningEventAdapter.setAll(action.screeningEvents, {
        ...state,
        loadingStates: {
          ...state.loadingStates,
          loadingScreeningEvents: false,
        },
      });
    }
  ),
  on(ScreeningEventActions.loadScreeningEventsFailed, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingScreeningEvents: false,
      },
    };
  }),
  on(
    ScreeningEventActions.loadScreeningEventByIdSucceeded,
    (state: State, action) => {
      return screeningEventAdapter.setOne(action.screeningEvent, {
        ...state,
        loadingStates: {
          ...state.loadingStates,
          loadingScreeningEvent: false,
        },
      });
    }
  ),
  on(ScreeningEventActions.loadScreeningEventByIdFailed, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingScreeningEvent: false,
      },
    };
  }),
  on(triggerScreeningEventCreation, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        createScreeningEvent: true,
      },
    };
  }),
  on(
    ScreeningEventActions.createScreeningEventSucceeded,
    (state: State, action) => {
      return screeningEventAdapter.addOne(action.screeningEvent, {
        ...state,
        loadingStates: {
          ...state.loadingStates,
          createScreeningEvent: false,
        },
      });
    }
  ),
  on(ScreeningEventActions.createScreeningEventFailed, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        createScreeningEvent: false,
      },
    };
  }),
  on(triggerScreeningEventUpdate, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        updateScreeningEvent: true,
      },
    };
  }),
  on(
    ScreeningEventActions.updateScreeningEventSucceeded,
    (state: State, action) => {
      return screeningEventAdapter.setOne(action.screeningEvent, {
        ...state,
        loadingStates: {
          ...state.loadingStates,
          updateScreeningEvent: false,
        },
      });
    }
  ),
  on(ScreeningEventActions.updateScreeningEventFailed, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        updateScreeningEvent: false,
      },
    };
  }),
  on(triggerScreeningEventRemoval, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        deleteScreeningEvent: true,
      },
    };
  }),
  on(
    ScreeningEventActions.deleteScreeningEventSucceeded,
    (state: State, action) => {
      return screeningEventAdapter.removeOne(action.id, {
        ...state,
        loadingStates: {
          ...state.loadingStates,
          deleteScreeningEvent: false,
        },
      });
    }
  ),
  on(ScreeningEventActions.deleteScreeningEventFailed, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        deleteScreeningEvent: false,
      },
    };
  })
);

export const screeningEventFeature = createFeature({
  name: screeningEventFeatureKey,
  reducer,
});
