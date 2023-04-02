import { createFeature, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Report } from 'src/app/core/_models/report';
import * as ReportActions from './report.actions';
import {
  setActiveReport,
  triggerReportCreation,
  triggerReportRemoval,
  triggerReportUpdate,
} from 'src/app/features/report/report.actions';

export const reportFeatureKey = 'report';

export interface State extends EntityState<Report> {
  activeRouteId: string | undefined;
  loadingStates: {
    loadingReport: boolean;
    loadingReports: boolean;
    createReport: boolean;
    deleteReport: boolean;
    updateReport: boolean;
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
  activeRouteId: undefined,
  loadingStates: {
    loadingReport: false,
    loadingReports: false,
    createReport: false,
    deleteReport: false,
    updateReport: false,
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
  }),
  on(setActiveReport, (state: State, action) => {
    return {
      ...state,
      activeRouteId: action.reportId,
    };
  }),
  on(triggerReportCreation, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        createReport: true,
      },
    };
  }),
  on(ReportActions.createReportSucceeded, (state: State, action) => {
    return reportAdapter.addOne(action.report, {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        createReport: false,
      },
    });
  }),
  on(triggerReportUpdate, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        updateReport: true,
      },
    };
  }),
  on(ReportActions.updateReportSucceeded, (state: State, action) => {
    return reportAdapter.setOne(action.report, {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        updateReport: false,
      },
    });
  }),
  on(triggerReportRemoval, (state: State) => {
    return {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        deleteReport: true,
      },
    };
  }),
  on(ReportActions.deleteReportSucceeded, (state: State, action) => {
    return reportAdapter.removeOne(action.id, {
      ...state,
      loadingStates: {
        ...state.loadingStates,
        deleteReport: false,
      },
    });
  })
);

export const reportFeature = createFeature({
  name: reportFeatureKey,
  reducer,
});
