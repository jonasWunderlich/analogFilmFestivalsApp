import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import {
  triggerCinemaCreation,
  triggerCinemaUpdate,
  triggerCinemaRemoval,
} from 'src/app/features/cinema/cinema.actions';
import { neitherNullNorUndefined } from 'src/app/core/utilities/null-or-undefined';
import { AnalogKinoBackendService } from 'src/app/core/services/analog-kino-http.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import * as CinemaActions from './cinema.actions';
import { NOTIFICATION_MESSAGES } from 'src/app/core/constants/notification-messages';
import { enteredCinemaOverview } from 'src/app/features/cinema/cinema-overview/cinema-overview.actions';
import { enteredCinemaDetails } from 'src/app/features/cinema/cinema-details/cinema-details.actions';
import { enteredCinemaEdit } from 'src/app/features/cinema/cinema-edit/cinema-edit.actions';

@Injectable()
export class CinemaEffects {
  private actions$ = inject(Actions);
  private notificationService = inject(NotificationService);
  private analogHttpService = inject(AnalogKinoBackendService);
  /* LOAD ALL CINEMAS */

  loadCinemas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CinemaActions.loadCinemas, enteredCinemaOverview),
      switchMap(() =>
        this.analogHttpService.getCinemas().pipe(
          map((cinemas) => CinemaActions.loadCinemasSucceeded({ cinemas })),
          catchError((error) => of(CinemaActions.loadCinemasFailed({ error })))
        )
      )
    )
  );

  loadCinemasSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.loadCinemasSucceeded),
        tap(() =>
          this.notificationService.success(
            NOTIFICATION_MESSAGES.loadAllSuccess,
            'Kino'
          )
        )
      ),
    { dispatch: false }
  );

  loadCinemasFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.loadCinemasFailed),
        tap(() =>
          this.notificationService.error(
            NOTIFICATION_MESSAGES.loadAllFail,
            'Kino'
          )
        )
      ),
    { dispatch: false }
  );

  /* LOAD CINEMA BY ID */

  loadCinemaById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        CinemaActions.loadCinemaById,
        enteredCinemaDetails,
        enteredCinemaEdit
      ),
      filter((params) => params?.id?.length > 0),
      switchMap((params) =>
        this.analogHttpService.getCinemaById(params.id).pipe(
          map((cinema) => CinemaActions.loadCinemaByIdSucceeded({ cinema })),
          catchError((error) =>
            of(CinemaActions.loadCinemaByIdFailed({ error }))
          )
        )
      )
    );
  });

  loadCinemaByIdSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.loadCinemaByIdSucceeded),
        tap(() =>
          this.notificationService.success(
            NOTIFICATION_MESSAGES.loadOneSuccess,
            'Kino'
          )
        )
      ),
    { dispatch: false }
  );

  loadCinemaByIdFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.loadCinemaByIdFailed),
        tap(() =>
          this.notificationService.error(
            NOTIFICATION_MESSAGES.loadOneFail,
            'Kino'
          )
        )
      ),
    { dispatch: false }
  );

  /* CREATE SCREENING EVENT BY ID */

  createCinema$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(triggerCinemaCreation),
      filter((params) => neitherNullNorUndefined(params?.cinema)),
      switchMap((params) =>
        this.analogHttpService.createCinema(params?.cinema).pipe(
          map((cinema) => CinemaActions.createCinemaSucceeded({ cinema })),
          catchError((error) => of(CinemaActions.createCinemaFailed({ error })))
        )
      )
    );
  });

  createCinemaSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.createCinemaSucceeded),
        tap(() =>
          this.notificationService.success(
            NOTIFICATION_MESSAGES.createdSuccess,
            'Kino'
          )
        )
      ),
    { dispatch: false }
  );

  createCinemaFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.createCinemaFailed),
        tap(() =>
          this.notificationService.error(
            NOTIFICATION_MESSAGES.createdFail,
            'Kino'
          )
        )
      ),
    { dispatch: false }
  );

  /* UPDATE SCREENING EVENT BY ID */

  updateCinema$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(triggerCinemaUpdate),
      filter(
        (params) =>
          neitherNullNorUndefined(params?.id) &&
          neitherNullNorUndefined(params?.cinema)
      ),
      switchMap((params) =>
        this.analogHttpService.updateCinema(params?.id, params?.cinema).pipe(
          map((cinema) => CinemaActions.updateCinemaSucceeded({ cinema })),
          catchError((error) => of(CinemaActions.updateCinemaFailed({ error })))
        )
      )
    );
  });

  updateCinemaSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.updateCinemaSucceeded),
        tap(() =>
          this.notificationService.success(
            NOTIFICATION_MESSAGES.updatedSuccess,
            'Kino'
          )
        )
      ),
    { dispatch: false }
  );

  updateCinemaFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.updateCinemaFailed),
        tap(() =>
          this.notificationService.error(
            NOTIFICATION_MESSAGES.updatedFail,
            'Kino'
          )
        )
      ),
    { dispatch: false }
  );

  /* DELETE SCREENING EVENT BY ID */

  deleteCinema$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(triggerCinemaRemoval),
      filter((params) => neitherNullNorUndefined(params?.id)),
      switchMap((params) =>
        this.analogHttpService.deleteCinema(params?.id).pipe(
          map((id) => CinemaActions.deleteCinemaSucceeded({ id })),
          catchError((error) => of(CinemaActions.deleteCinemaFailed({ error })))
        )
      )
    );
  });

  deleteCinemaSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.deleteCinemaSucceeded),
        tap(() =>
          this.notificationService.success(
            NOTIFICATION_MESSAGES.deletedSuccess,
            'Kino'
          )
        )
      ),
    { dispatch: false }
  );

  deleteCinemaFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CinemaActions.deleteCinemaFailed),
        tap(() =>
          this.notificationService.error(
            NOTIFICATION_MESSAGES.deletedFail,
            'Kino'
          )
        )
      ),
    { dispatch: false }
  );
}
