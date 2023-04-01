import { reducer, initialState } from './projection.reducer';

describe('Projection Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      // tslint:disable-next-line
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
