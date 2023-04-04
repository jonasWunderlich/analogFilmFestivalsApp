import {
  createFeatureSelector,
  createSelector,
  DefaultProjectorFn,
  MemoizedSelector,
} from '@ngrx/store';
import { selectRouteParams } from 'src/app/+state/routing-store/router.reducer';
import { neitherNullNorUndefined } from 'src/app/core/utilities/null-or-undefined';
import { Report } from 'src/app/core/_models/report';
import * as fromReport from './report.reducer';
import { selectReferencedObjects } from 'src/app/core/utilities/store-selectors.utilities';
import { selectActiveScreeningEvent } from '../screening-event-store/screening-event.selectors';
import { selectActiveCinema } from '../cinema-store/cinema.selectors';

export const selectReportState = createFeatureSelector<fromReport.State>(
  fromReport.reportFeatureKey
);

const {
  selectEntities: selectEntitiesProjection,
  selectAll: selectAllProjection,
} = fromReport.reportAdapter.getSelectors();

/* select Entites */

export const selectEntities = createSelector(
  selectReportState,
  selectEntitiesProjection
);

export const selectReports = createSelector(
  selectReportState,
  selectAllProjection
);

/* select reports via id */

export const selectReportsByIds = (
  ids: string[]
): MemoizedSelector<object, Report[], DefaultProjectorFn<Report[]>> => {
  return createSelector(selectReports, (reports: Report[] = []): Report[] =>
    reports.filter((report) => ids.indexOf(report.id) > -1)
  );
};

/* select report via id */

export const selectActiveReportId = createSelector(
  selectReportState,
  (state: fromReport.State): string | undefined => state.activeRouteId
);

export const selectActiveReport = createSelector(
  selectEntities,
  selectActiveReportId,
  (entities, entityId): Report | undefined => {
    if (!entityId) {
      return undefined;
    }
    return entities[entityId];
  }
);

/* select via route */

export const selectRouterReportId = createSelector(
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

export const selectActiveReportByRouter = createSelector(
  selectEntities,
  selectRouterReportId,
  (entities, entityId): Report | undefined => {
    if (!entityId) {
      console.error('select Report By Route WITHOUT params');
      return undefined;
    }
    return entities[entityId];
  }
);

/* Loading States */

export const selectReportLoadingStates = createSelector(
  selectReportState,
  (state) => state.loadingStates
);

export const selectReportLoading = createSelector(
  selectReportLoadingStates,
  (state) => state.loadingReport
);

export const selectReportsLoading = createSelector(
  selectReportLoadingStates,
  (state) => state.loadingReports
);

export const selectScreeningEventReports = createSelector(
  selectActiveScreeningEvent,
  selectReports,
  (event, reports): Report[] => {
    return event?.reportRefs
      ? selectReferencedObjects(reports, event?.reportRefs)
      : [];
  }
);

export const selectCinemaReports = createSelector(
  selectActiveCinema,
  selectReports,
  (cinema, reports): Report[] => {
    return cinema?.reportRefs
      ? selectReferencedObjects(reports, cinema?.reportRefs)
      : [];
  }
);
