import { loadCinemas } from './cinema.actions';
import * as fromCinema from './cinema.reducer';
import { selectCinemaState } from './cinema.selectors';

const initState = {
  activeCinemaId: undefined,
  ids: [],
  entities: {},
  loadingStates: {
    loadingCinema: false,
    loadingCinemas: false,
    createCinema: false,
    deleteCinema: false,
    updateCinema: false,
  },
};

describe('Cinema Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCinemaState({
      [fromCinema.cinemaFeatureKey]: {},
    });

    expect(result).toEqual(initState);
  });

  it('should enable loading flag for loadCinemas', () => {
    const action = loadCinemas();
    const newState = fromCinema.reducer(initState, action);
    expect(newState.loadingStates.loadingCinemas).toBe(true);
  });
});
