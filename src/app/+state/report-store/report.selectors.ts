import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReport from './report.reducer';

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
