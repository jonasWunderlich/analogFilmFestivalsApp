import * as fromProjection from './projection.reducer';
import { selectProjectionState } from './projection.selectors';

describe('Projection Selectors', () => {
  it('should select the feature state', () => {
    const result = selectProjectionState({
      [fromProjection.projectionFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
