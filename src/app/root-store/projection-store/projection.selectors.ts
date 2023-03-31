import {
  createFeatureSelector,
  createSelector,
  DefaultProjectorFn,
  MemoizedSelector,
} from '@ngrx/store';
import { selectRouteParams } from 'src/app/root-store/routing-store/router.reducer';
import { neitherNullNorUndefined } from 'src/app/shared/helpers/null-or-undefined.helper';
import * as fromProjection from './projection.reducer';
import { Projection } from 'src/app/shared/_models/projection';

export const selectProjectionState =
  createFeatureSelector<fromProjection.State>(
    fromProjection.projectionFeatureKey
  );

const {
  selectEntities: selectEntitiesProjection,
  selectAll: selectAllProjection,
} = fromProjection.projectionAdapter.getSelectors();

/* select Entites */

export const selectEntities = createSelector(
  selectProjectionState,
  selectEntitiesProjection
);

export const selectProjections = createSelector(
  selectProjectionState,
  selectAllProjection
);

/* select projections via id */

export const selectProjectionsByIds = (
  ids: string[]
): MemoizedSelector<object, Projection[], DefaultProjectorFn<Projection[]>> => {
  return createSelector(
    selectProjections,
    (projections: Projection[] = []): Projection[] =>
      projections.filter((projection) => ids.indexOf(projection.id) > -1)
  );
};

/* select projection via id */

export const selectActiveProjectionId = createSelector(
  selectProjectionState,
  (state: fromProjection.State): string | undefined => {
    return state.activeProjectionId;
  }
);

export const selectActiveProjection = createSelector(
  selectEntities,
  selectActiveProjectionId,
  (entities, entityId): Projection | undefined => {
    if (!entityId) {
      return undefined;
    }
    return entities[entityId];
  }
);

/* select via route */

export const selectRouterProjectionId = createSelector(
  selectRouteParams,
  (params): string | undefined => {
    if (
      neitherNullNorUndefined(params) &&
      neitherNullNorUndefined(params['id'])
    ) {
      return params['id'] as string;
    } else {
      return undefined;
    }
  }
);

export const selectSelectedProjectionByRouter = createSelector(
  selectEntities,
  selectRouterProjectionId,
  (entities, entityId): Projection | undefined => {
    if (!entityId) {
      console.error('select Projection By Route WITHOUT params');
      return undefined;
    }
    return entities[entityId];
  }
);

/* Loading States */

export const selectProjectionLoadingStates = createSelector(
  selectProjectionState,
  (state) => state.loadingStates
);

export const selectProjectionLoading = createSelector(
  selectProjectionLoadingStates,
  (state) => state.loadingProjection
);

export const selectProjectionsLoading = createSelector(
  selectProjectionLoadingStates,
  (state) => state.loadingProjections
);
