import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import { ScreeningEvent } from 'src/app/_models/screening-event';
import * as ScreeningEventActions from './screening-event.actions';

export const screeningEventFeatureKey = 'screeningEvent';

export interface State extends EntityState<ScreeningEvent> {
  selectedScreeningEventId: string | undefined;
  loadingStates: {
    loadingScreeningEvent: boolean;
    loadingScreeningEvents: boolean;
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
  selectedScreeningEventId: undefined,
  loadingStates: {
    loadingScreeningEvent: false,
    loadingScreeningEvents: false,
  },
});

export const reducer = createReducer(
  initialState,
  on(ScreeningEventActions.loadScreeningEvents, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingScreeningEvents: true,
      },
    };
  }),
  on(ScreeningEventActions.loadScreeningEventById, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingScreeningEvent: true,
      },
    };
  }),
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
  on(ScreeningEventActions.loadScreeningEventsFailed, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingScreeningEvents: false,
      },
    };
  }),
  on(ScreeningEventActions.loadScreeningEventByIdFailed, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingScreeningEvent: false,
      },
    };
  })
);

export const screeningEventFeature = createFeature({
  name: screeningEventFeatureKey,
  reducer,
});
