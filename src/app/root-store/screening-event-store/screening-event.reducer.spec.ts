import { reducer, initialState } from './screening-event.reducer';

describe('Event Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      // tslint:disable-next-line
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
