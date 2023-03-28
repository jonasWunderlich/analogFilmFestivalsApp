import * as fromCinema from './cinema.reducer';
import { selectCinemaState } from './cinema.selectors';

describe('Cinema Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCinemaState({
      [fromCinema.cinemaFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
