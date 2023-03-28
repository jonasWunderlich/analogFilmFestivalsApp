import { createFeature, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Report } from 'src/app/_models/report';
import * as ReportActions from './report.actions';

export const reportFeatureKey = 'report';

export interface State extends EntityState<Report> {
  selectedReportId: string | undefined;
  loadingStates: {
    loadingReport: boolean;
    loadingReports: boolean;
  };
}

export function getReportId(report: Report): string {
  return report.id;
}

export const reportAdapter: EntityAdapter<Report> = createEntityAdapter<Report>(
  {
    selectId: getReportId,
  }
);

export const initialState: State = reportAdapter.getInitialState({
  selectedReportId: undefined,
  loadingStates: {
    loadingReport: false,
    loadingReports: false,
  },
});

export const reducer = createReducer(
  initialState,
  on(ReportActions.loadReports, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingReports: true,
      },
    };
  }),
  on(ReportActions.loadReportById, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingReport: true,
      },
    };
  }),
  on(ReportActions.loadReportsSucceeded, (state: State, action) => {
    return reportAdapter.setAll(action.reports, {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingReports: false,
      },
    });
  }),
  on(ReportActions.loadReportByIdSucceeded, (state: State, action) => {
    return reportAdapter.setOne(action.report, {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingReport: false,
      },
    });
  }),
  on(ReportActions.loadReportsFailed, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingReports: false,
      },
    };
  }),
  on(ReportActions.loadReportByIdFailed, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        loadingReport: false,
      },
    };
  })
);

export const reportFeature = createFeature({
  name: reportFeatureKey,
  reducer,
});
