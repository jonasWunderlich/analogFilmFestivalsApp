import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { filter, of } from 'rxjs';
import * as ReportActions from './report.actions';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AnalogKinoBackendService } from 'src/app/shared/services/analog-kino-http.service';

@Injectable()
export class ReportEffects {
  private actions$ = inject(Actions);
  private analogHttpService = inject(AnalogKinoBackendService);
  private notificationService = inject(NotificationService);

  loadReports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportActions.loadReports),
      switchMap(() =>
        this.analogHttpService.getReports().pipe(
          map((reports) => ReportActions.loadReportsSucceeded({ reports })),
          catchError((error) => of(ReportActions.loadReportsFailed({ error })))
        )
      )
    )
  );

  loadReportsSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ReportActions.loadReportsSucceeded),
        tap(() => this.notificationService.success('report.loadingSucceed'))
      ),
    { dispatch: false }
  );

  loadReportsFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ReportActions.loadReportsFailed),
        tap(() => this.notificationService.error('report.loadingFailed'))
      ),
    { dispatch: false }
  );

  loadReportById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ReportActions.loadReportById),
      filter((params) => params?.id?.length > 0),
      switchMap((params) =>
        this.analogHttpService.getReportById(params.id).pipe(
          map((report) => ReportActions.loadReportByIdSucceeded({ report })),
          catchError((error) =>
            of(ReportActions.loadReportByIdFailed({ error }))
          )
        )
      )
    );
  });
}
