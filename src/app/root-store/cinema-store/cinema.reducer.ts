import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import { setActiveCinemaId } from 'src/app/pages/cinema/cinema-details/cinema-details.actions';

import { Cinema } from 'src/app/shared/_models/cinema';
import * as CinemaActions from './cinema.actions';

export const cinemaFeatureKey = 'cinema';

export interface State extends EntityState<Cinema> {
  activeCinemaId: string | undefined;
  loadingStates: {
    loadingCinema: boolean;
    loadingCinemas: boolean;
  };
}

export function getCinemaId(cinema: Cinema): string {
  return cinema.id;
}

export const cinemaAdapter: EntityAdapter<Cinema> = createEntityAdapter<Cinema>(
  {
    selectId: getCinemaId,
  }
);

export const initialState: State = cinemaAdapter.getInitialState({
  activeCinemaId: undefined,
  loadingStates: {
    loadingCinema: false,
    loadingCinemas: false,
  },
});

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
      activeCinemaId: action.cinema.id,
      loadingStates: {
        ...state.loadingStates,
        loadingCinema: false,
      },
    });
  }),
  on(CinemaActions.loadCinemasFailed, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingCinemas: false,
      },
    };
  }),
  on(CinemaActions.loadCinemaByIdFailed, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingCinema: false,
      },
    };
  }),
  on(setActiveCinemaId, (state: State, action) => {
    return {
      ...state,
      activeCinemaId: action.cinemaId,
    };
  })
);

export const cinemaFeature = createFeature({
  name: cinemaFeatureKey,
  reducer,
});
