import * as fromEvent from './screening-event.reducer';
import { selectScreeningEventState } from './screening-event.selectors';

describe('Event Selectors', () => {
  it('should select the feature state', () => {
    const result = selectScreeningEventState({
      [fromEvent.screeningEventFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
