import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';

import { Cinema } from 'src/app/_models/cinema';
import * as CinemaActions from './cinema.actions';

export const cinemaFeatureKey = 'cinema';

export interface State extends EntityState<Cinema> {
  selectedCinemaId: string | undefined;
  loadingStates: {
    loadingCinema: boolean,
    loadingCinemas: boolean,
  }
}

export function getCinemaId(cinema: Cinema): string {
  return cinema.id;
}

export const cinemaAdapter: EntityAdapter<Cinema> = createEntityAdapter<Cinema>({
  selectId: getCinemaId,
})

export const initialState: State = cinemaAdapter.getInitialState({
  selectedCinemaId: undefined,
  loadingStates: {
    loadingCinema: false,
    loadingCinemas: false,
  }
})

export const reducer = createReducer(
  initialState,
  on(CinemaActions.loadCinemas, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingCinemas: true,
      },
    };
  }),
  on(CinemaActions.loadCinemaById, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingCinema: true,
      },
    };
  }),
  on(CinemaActions.loadCinemasSucceeded, (state: State, action) => {
    return cinemaAdapter.setAll(action.cinemas, {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingCinemas: false,
      },
    });
  }),
  on(CinemaActions.loadCinemaByIdSucceeded, (state: State, action) => {
    return cinemaAdapter.setOne(action.cinema, {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingCinema: false,
      },
    });
  }),
  on(CinemaActions.loadCinemasFailed, (state: State, action) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingCinemas: false,
      },
    };
  }),
  on(CinemaActions.loadCinemaByIdFailed, (state: State, action) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingCinema: false,
      },
    };
  }),
);

export const cinemaFeature = createFeature({
  name: cinemaFeatureKey,
  reducer,
});
