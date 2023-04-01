import { loadScreeningEvents } from './screening-event.actions';
import * as fromEvent from './screening-event.reducer';
import { selectScreeningEventState } from './screening-event.selectors';

const initState = {
  activeScreeningEventId: undefined,
  ids: [],
  entities: {},
  loadingStates: {
    loadingScreeningEvent: false,
    loadingScreeningEvents: false,
    createScreeningEvent: false,
    deleteScreeningEvent: false,
    updateScreeningEvent: false,
  },
};

describe('Event Selectors', () => {
  it('should select the feature state', () => {
    const result = selectScreeningEventState({
      [fromEvent.screeningEventFeatureKey]: {},
    });

    expect(result).toEqual(initState);
  });

  it('should enable loading flag for loadScreeningEvents', () => {
    const action = loadScreeningEvents();
    const newState = fromEvent.reducer(initState, action);
    expect(newState.loadingStates.loadingScreeningEvents).toBe(true);
  });
});
