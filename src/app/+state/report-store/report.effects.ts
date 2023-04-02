import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { filter, of } from 'rxjs';
import * as ReportActions from './report.actions';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AnalogKinoBackendService } from 'src/app/core/services/analog-kino-http.service';
import { neitherNullNorUndefined } from 'src/app/core/utilities/null-or-undefined';
import {
  triggerReportCreation,
  triggerReportUpdate,
  triggerReportRemoval,
} from 'src/app/features/report/report.actions';

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

  /* CREATE SCREENING EVENT BY ID */

  createReport$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(triggerReportCreation),
      filter((params) => neitherNullNorUndefined(params?.report)),
      switchMap((params) =>
        this.analogHttpService.createReport(params?.report).pipe(
          map((report) => ReportActions.createReportSucceeded({ report })),
          catchError((error) => of(ReportActions.createReportFailed({ error })))
        )
      )
    );
  });

  createReportSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ReportActions.createReportSucceeded),
        tap(() => this.notificationService.success('Report.createSucceeded'))
      ),
    { dispatch: false }
  );

  createReportFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ReportActions.createReportFailed),
        tap(() => this.notificationService.error('Report.createFailed'))
      ),
    { dispatch: false }
  );

  /* UPDATE SCREENING EVENT BY ID */

  updateReport$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(triggerReportUpdate),
      filter(
        (params) =>
          neitherNullNorUndefined(params?.id) &&
          neitherNullNorUndefined(params?.report)
      ),
      switchMap((params) =>
        this.analogHttpService.updateReport(params?.id, params?.report).pipe(
          map((report) => ReportActions.updateReportSucceeded({ report })),
          catchError((error) => of(ReportActions.updateReportFailed({ error })))
        )
      )
    );
  });

  updateReportSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ReportActions.updateReportSucceeded),
        tap(() => this.notificationService.success('Report.updateSucceeded'))
      ),
    { dispatch: false }
  );

  updateReportFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ReportActions.updateReportFailed),
        tap(() => this.notificationService.error('Report.updateFailed'))
      ),
    { dispatch: false }
  );

  /* DELETE SCREENING EVENT BY ID */

  deleteReport$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(triggerReportRemoval),
      filter((params) => neitherNullNorUndefined(params?.id)),
      switchMap((params) =>
        this.analogHttpService.deleteReport(params?.id).pipe(
          map((id) => ReportActions.deleteReportSucceeded({ id })),
          catchError((error) => of(ReportActions.deleteReportFailed({ error })))
        )
      )
    );
  });

  deleteReportSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ReportActions.deleteReportSucceeded),
        tap(() => this.notificationService.success('Report.deleteSucceeded'))
      ),
    { dispatch: false }
  );

  deleteReportFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ReportActions.deleteReportFailed),
        tap(() => this.notificationService.error('Report.deleteFailed'))
      ),
    { dispatch: false }
  );
}
