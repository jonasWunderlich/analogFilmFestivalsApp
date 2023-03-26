import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { filter, of } from 'rxjs';
import * as ReportActions from './report.actions';
import { NotificationService } from 'src/app/_services/notification.service';
import { AnalogKinoBackendService } from 'src/app/_services/analog-kino-backend.service';


@Injectable()
export class ReportEffects {

  loadReports$ = createEffect(
    () => this.actions$.pipe(
      ofType(ReportActions.loadReports),
      switchMap(() =>
        this.analogCinemaBackend.getReports().pipe(
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
      this.analogCinemaBackend.getReportById(params.id).pipe(
          map(report => ReportActions.loadReportByIdSucceeded({ report })),
          catchError((error) => of(ReportActions.loadReportByIdFailed({ error })))
        )
      )
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly analogCinemaBackend: AnalogKinoBackendService,
    private readonly notificationService: NotificationService) {}
}
