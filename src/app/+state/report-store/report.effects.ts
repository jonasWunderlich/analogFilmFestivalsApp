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
import { NOTIFICATION_MESSAGES } from 'src/app/core/constants/notification-messages';
import { enteredReportOverview } from 'src/app/features/report/report-overview/report-overview.actions';
import { enteredReportDetails } from 'src/app/features/report/report-details/report-details.actions';
import { enteredReportEdit } from 'src/app/features/report/report-edit/report-edit.actions';

@Injectable()
export class ReportEffects {
  private actions$ = inject(Actions);
  private analogHttpService = inject(AnalogKinoBackendService);
  private notificationService = inject(NotificationService);

  /* LOAD ALL REPORT */

  loadReports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportActions.loadReports, enteredReportOverview),
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
        tap(() =>
          this.notificationService.success(
            NOTIFICATION_MESSAGES.loadAllSuccess,
            'Erfahrungsbericht'
          )
        )
      ),
    { dispatch: false }
  );

  loadReportsFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ReportActions.loadReportsFailed),
        tap(() =>
          this.notificationService.error(
            NOTIFICATION_MESSAGES.loadOneFail,
            'Erfahrungsbericht'
          )
        )
      ),
    { dispatch: false }
  );

  /* LOAD REPORT BY ID */

  loadReportById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(enteredReportDetails, enteredReportEdit),
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

  loadReportByIdSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ReportActions.loadReportByIdSucceeded),
        tap(() =>
          this.notificationService.success(
            NOTIFICATION_MESSAGES.loadOneSuccess,
            'Erfahrungsbericht'
          )
        )
      ),
    { dispatch: false }
  );

  loadReportByIdFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ReportActions.loadReportByIdFailed),
        tap(() =>
          this.notificationService.error(
            NOTIFICATION_MESSAGES.loadOneFail,
            'Erfahrungsbericht'
          )
        )
      ),
    { dispatch: false }
  );

  /* CREATE REPORT BY ID */

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
        tap(() =>
          this.notificationService.success(
            NOTIFICATION_MESSAGES.createdSuccess,
            'Erfahrungsbericht'
          )
        )
      ),
    { dispatch: false }
  );

  createReportFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ReportActions.createReportFailed),
        tap(() =>
          this.notificationService.error(
            NOTIFICATION_MESSAGES.createdFail,
            'Erfahrungsbericht'
          )
        )
      ),
    { dispatch: false }
  );

  /* UPDATE REPORT BY ID */

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
        tap(() =>
          this.notificationService.success(
            NOTIFICATION_MESSAGES.updatedSuccess,
            'Erfahrungsbericht'
          )
        )
      ),
    { dispatch: false }
  );

  updateReportFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ReportActions.updateReportFailed),
        tap(() =>
          this.notificationService.error(
            NOTIFICATION_MESSAGES.updatedFail,
            'Erfahrungsbericht'
          )
        )
      ),
    { dispatch: false }
  );

  /* DELETE REPORT BY ID */

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
        tap(() =>
          this.notificationService.success(
            NOTIFICATION_MESSAGES.deletedSuccess,
            'Erfahrungsbericht'
          )
        )
      ),
    { dispatch: false }
  );

  deleteReportFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ReportActions.deleteReportFailed),
        tap(() =>
          this.notificationService.error(
            NOTIFICATION_MESSAGES.deletedFail,
            'Erfahrungsbericht'
          )
        )
      ),
    { dispatch: false }
  );
}
