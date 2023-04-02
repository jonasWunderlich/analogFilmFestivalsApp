import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import {
  triggerCinemaCreation,
  triggerCinemaUpdate,
  triggerCinemaRemoval,
  setActiveCinemaId,
} from 'src/app/features/cinema/cinema.actions';

import { Cinema } from 'src/app/core/_models/cinema';
import * as CinemaActions from './cinema.actions';
import { enteredCinemaDetails } from 'src/app/features/cinema/cinema-details/cinema-details.actions';

export const cinemaFeatureKey = 'cinema';

export interface State extends EntityState<Cinema> {
  activeCinemaId: string | undefined;
  cinemasOnMap: Cinema[];
  loadingStates: {
    loadingCinema: boolean;
    loadingCinemas: boolean;
    createCinema: boolean;
    deleteCinema: boolean;
    updateCinema: boolean;
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
  cinemasOnMap: [],
  loadingStates: {
    loadingCinema: false,
    loadingCinemas: false,
    createCinema: false,
    deleteCinema: false,
    updateCinema: false,
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
  }),
  on(enteredCinemaDetails, (state: State) => {
    return {
      ...state,
      // TODO ...
    };
  }),
  on(triggerCinemaCreation, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        createCinema: true,
      },
    };
  }),
  on(CinemaActions.createCinemaSucceeded, (state: State, action) => {
    return cinemaAdapter.addOne(action.cinema, {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        createCinema: false,
      },
    });
  }),
  on(triggerCinemaUpdate, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        updateCinema: true,
      },
    };
  }),
  on(CinemaActions.updateCinemaSucceeded, (state: State, action) => {
    return cinemaAdapter.setOne(action.cinema, {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        updateCinema: false,
      },
    });
  }),
  on(triggerCinemaRemoval, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        deleteCinema: true,
      },
    };
  }),
  on(CinemaActions.deleteCinemaSucceeded, (state: State, action) => {
    return cinemaAdapter.removeOne(action.id, {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        deleteCinema: false,
      },
    });
  })
);

export const cinemaFeature = createFeature({
  name: cinemaFeatureKey,
  reducer,
});
