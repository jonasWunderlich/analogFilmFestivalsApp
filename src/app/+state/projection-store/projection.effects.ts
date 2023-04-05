import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import {
  triggerProjectionCreation,
  triggerProjectionUpdate,
  triggerProjectionRemoval,
} from 'src/app/features/projection/projection.actions';
import { neitherNullNorUndefined } from 'src/app/core/utilities/null-or-undefined';
import { AnalogKinoBackendService } from 'src/app/core/services/analog-kino-http.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import * as ProjectionActions from './projection.actions';
import { NOTIFICATION_MESSAGES } from 'src/app/core/constants/notification-messages';
import { enteredProjectionDetails } from 'src/app/features/projection/projection-details/projection-details.actions';
import { enteredProjectionEdit } from 'src/app/features/projection/projection-edit/projection-edit.actions';

@Injectable()
export class ProjectionEffects {
  private actions$ = inject(Actions);
  private analogHttpService = inject(AnalogKinoBackendService);
  private notificationService = inject(NotificationService);

  /* LOAD ALL CINEMAS */

  loadProjections$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectionActions.loadProjections),
      switchMap(() =>
        this.analogHttpService.getProjections().pipe(
          map((projections) =>
            ProjectionActions.loadProjectionsSucceeded({ projections })
          ),
          catchError((error) =>
            of(ProjectionActions.loadProjectionsFailed({ error }))
          )
        )
      )
    )
  );

  loadProjectionsSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProjectionActions.loadProjectionsSucceeded),
        tap(() =>
          this.notificationService.success(
            NOTIFICATION_MESSAGES.loadAllSuccess,
            'Projektion'
          )
        )
      ),
    { dispatch: false }
  );

  loadProjectionsFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProjectionActions.loadProjectionsFailed),
        tap(() =>
          this.notificationService.error(
            NOTIFICATION_MESSAGES.loadAllFail,
            'Projektion'
          )
        )
      ),
    { dispatch: false }
  );

  /* LOAD CINEMA BY ID */

  loadProjectionById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(enteredProjectionDetails, enteredProjectionEdit),
      filter((params) => params?.id?.length > 0),
      switchMap((params) =>
        this.analogHttpService.getProjectionById(params.id).pipe(
          map((projection) =>
            ProjectionActions.loadProjectionByIdSucceeded({ projection })
          ),
          catchError((error) =>
            of(ProjectionActions.loadProjectionByIdFailed({ error }))
          )
        )
      )
    );
  });

  loadProjectionByIdSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProjectionActions.loadProjectionByIdSucceeded),
        tap(() =>
          this.notificationService.success(
            NOTIFICATION_MESSAGES.loadOneSuccess,
            'Projektion'
          )
        )
      ),
    { dispatch: false }
  );

  loadProjectionByIdFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProjectionActions.loadProjectionByIdFailed),
        tap(() =>
          this.notificationService.error(
            NOTIFICATION_MESSAGES.loadOneFail,
            'Projektion'
          )
        )
      ),
    { dispatch: false }
  );

  /* CREATE SCREENING EVENT BY ID */

  createProjection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(triggerProjectionCreation),
      filter((params) => neitherNullNorUndefined(params?.projection)),
      switchMap((params) =>
        this.analogHttpService.createProjection(params?.projection).pipe(
          map((projection) =>
            ProjectionActions.createProjectionSucceeded({ projection })
          ),
          catchError((error) =>
            of(ProjectionActions.createProjectionFailed({ error }))
          )
        )
      )
    );
  });

  createProjectionSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProjectionActions.createProjectionSucceeded),
        tap(() =>
          this.notificationService.success(
            NOTIFICATION_MESSAGES.createdSuccess,
            'Projektion'
          )
        )
      ),
    { dispatch: false }
  );

  createProjectionFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProjectionActions.createProjectionFailed),
        tap(() =>
          this.notificationService.error(
            NOTIFICATION_MESSAGES.createdFail,
            'Projektion'
          )
        )
      ),
    { dispatch: false }
  );

  /* UPDATE SCREENING EVENT BY ID */

  updateProjection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(triggerProjectionUpdate),
      filter(
        (params) =>
          neitherNullNorUndefined(params?.id) &&
          neitherNullNorUndefined(params?.projection)
      ),
      switchMap((params) =>
        this.analogHttpService
          .updateProjection(params?.id, params?.projection)
          .pipe(
            map((projection) =>
              ProjectionActions.updateProjectionSucceeded({ projection })
            ),
            catchError((error) =>
              of(ProjectionActions.updateProjectionFailed({ error }))
            )
          )
      )
    );
  });

  updateProjectionSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProjectionActions.updateProjectionSucceeded),
        tap(() =>
          this.notificationService.success(
            NOTIFICATION_MESSAGES.updatedSuccess,
            'Projektion'
          )
        )
      ),
    { dispatch: false }
  );

  updateProjectionFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProjectionActions.updateProjectionFailed),
        tap(() =>
          this.notificationService.error(
            NOTIFICATION_MESSAGES.updatedFail,
            'Projektion'
          )
        )
      ),
    { dispatch: false }
  );

  /* DELETE SCREENING EVENT BY ID */

  deleteProjection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(triggerProjectionRemoval),
      filter((params) => neitherNullNorUndefined(params?.id)),
      switchMap((params) =>
        this.analogHttpService.deleteProjection(params?.id).pipe(
          map((id) => ProjectionActions.deleteProjectionSucceeded({ id })),
          catchError((error) =>
            of(ProjectionActions.deleteProjectionFailed({ error }))
          )
        )
      )
    );
  });

  deleteProjectionSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProjectionActions.deleteProjectionSucceeded),
        tap(() =>
          this.notificationService.success(
            NOTIFICATION_MESSAGES.deletedSuccess,
            'Projektion'
          )
        )
      ),
    { dispatch: false }
  );

  deleteProjectionFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProjectionActions.deleteProjectionFailed),
        tap(() =>
          this.notificationService.error(
            NOTIFICATION_MESSAGES.deletedFail,
            'Projektion'
          )
        )
      ),
    { dispatch: false }
  );
}
