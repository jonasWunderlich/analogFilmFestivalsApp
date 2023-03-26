import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { filter, of } from 'rxjs';
import * as ReportActions from './report.actions';
import { mockReport, mockReports } from 'src/app/_mock/report.mocks';
import { sortByDate } from 'src/app/_mock/helpers.mock';
import { NotificationService } from 'src/app/_services/notification.service';

const reports = mockReports(40).sort((a, b) => sortByDate(a.date, b.date));

@Injectable()
export class ReportEffects {

  loadReports$ = createEffect(
    () => this.actions$.pipe(
      ofType(ReportActions.loadReports),
      switchMap(() =>
        of(reports).pipe(
          map(reports => ReportActions.loadReportsSucceeded({ reports })),
          catchError((error) => of(ReportActions.loadReportsFailed({ error })))
        )
      )
    )
  );

  loadReportsSucceeded$ = createEffect(
    () => this.actions$.pipe(
      ofType(ReportActions.loadReportsSucceeded),
      tap(() => this.notificationService.success('report.loadingSucceed'))
    ), { dispatch: false }
  );

  loadReportsFailed$ = createEffect(
    () => this.actions$.pipe(
      ofType(ReportActions.loadReportsFailed),
      tap(() => this.notificationService.error('report.loadingFailed'))
    ), { dispatch: false }
  );

  loadReportById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReportActions.loadReportById),
      filter(params => params?.id?.length > 0),
      switchMap((params) =>
        of(mockReport({id: params.id})).pipe(
          map(report => ReportActions.loadReportByIdSucceeded({ report })),
          catchError((error) => of(ReportActions.loadReportByIdFailed({ error })))
        )
      )
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly notificationService: NotificationService) {}
}
