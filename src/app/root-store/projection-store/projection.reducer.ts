import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import {
  setActiveProjectionId,
  triggerProjectionCreation,
  triggerProjectionUpdate,
  triggerProjectionRemoval,
} from 'src/app/features/projection/projection.actions';
import * as ProjectionActions from './projection.actions';
import { Projection } from 'src/app/shared/_models/projection';

export const projectionFeatureKey = 'projection';

export interface State extends EntityState<Projection> {
  activeProjectionId: string | undefined;
  loadingStates: {
    loadingProjection: boolean;
    loadingProjections: boolean;
    createProjection: boolean;
    deleteProjection: boolean;
    updateProjection: boolean;
  };
}

export function getProjectionId(projection: Projection): string {
  return projection.id;
}

export const projectionAdapter: EntityAdapter<Projection> =
  createEntityAdapter<Projection>({
    selectId: getProjectionId,
  });

export const initialState: State = projectionAdapter.getInitialState({
  activeProjectionId: undefined,
  loadingStates: {
    loadingProjection: false,
    loadingProjections: false,
    createProjection: false,
    deleteProjection: false,
    updateProjection: false,
  },
});

export const reducer = createReducer(
  initialState,
  on(ProjectionActions.loadProjections, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingProjections: true,
      },
    };
  }),
  on(ProjectionActions.loadProjectionById, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingProjection: true,
      },
    };
  }),
  on(ProjectionActions.loadProjectionsSucceeded, (state: State, action) => {
    return projectionAdapter.setAll(action.projections, {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingProjections: false,
      },
    });
  }),
  on(ProjectionActions.loadProjectionByIdSucceeded, (state: State, action) => {
    return projectionAdapter.setOne(action.projection, {
      ...state,
      activeProjectionId: action.projection.id,
      loadingStates: {
        ...state.loadingStates,
        loadingProjection: false,
      },
    });
  }),
  on(ProjectionActions.loadProjectionsFailed, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingProjections: false,
      },
    };
  }),
  on(ProjectionActions.loadProjectionByIdFailed, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingProjection: false,
      },
    };
  }),
  on(setActiveProjectionId, (state: State, action) => {
    return {
      ...state,
      activeProjectionId: action.projectionId,
    };
  }),
  on(triggerProjectionCreation, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        createProjection: true,
      },
    };
  }),
  on(ProjectionActions.createProjectionSucceeded, (state: State, action) => {
    return projectionAdapter.addOne(action.projection, {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        createProjection: false,
      },
    });
  }),
  on(triggerProjectionUpdate, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        updateProjection: true,
      },
    };
  }),
  on(ProjectionActions.updateProjectionSucceeded, (state: State, action) => {
    return projectionAdapter.setOne(action.projection, {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        updateProjection: false,
      },
    });
  }),
  on(triggerProjectionRemoval, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        deleteProjection: true,
      },
    };
  }),
  on(ProjectionActions.deleteProjectionSucceeded, (state: State, action) => {
    return projectionAdapter.removeOne(action.id, {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        deleteProjection: false,
      },
    });
  })
);

export const projectionFeature = createFeature({
  name: projectionFeatureKey,
  reducer,
});
