import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap, tap } from 'rxjs';
import {
  triggerScreeningEventCreation,
  triggerScreeningEventRemoval,
  triggerScreeningEventUpdate,
} from 'src/app/features/screening-event/screening-event.actions';
import { neitherNullNorUndefined } from 'src/app/core/utilities/null-or-undefined';
import { AnalogKinoBackendService } from 'src/app/core/services/analog-kino-http.service';

import { NotificationService } from 'src/app/core/services/notification.service';
import * as EventActions from './screening-event.actions';

@Injectable()
export class EventEffects {
  private actions$ = inject(Actions);
  private analogHttpService = inject(AnalogKinoBackendService);
  private notificationService = inject(NotificationService);

  /* LOAD ALL SCREENING EVENT */

  loadScreeningEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventActions.loadScreeningEvents),
      switchMap(() =>
        this.analogHttpService.getScreeningEvents().pipe(
          map((screeningEvents) =>
            EventActions.loadScreeningEventsSucceeded({ screeningEvents })
          ),
          catchError((error) =>
            of(EventActions.loadScreeningEventsFailed({ error }))
          )
        )
      )
    )
  );

  loadScreeningEventsSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EventActions.loadScreeningEventsSucceeded),
        tap(() => this.notificationService.success('Events.loadingSucceeded'))
      ),
    { dispatch: false }
  );

  loadScreeningEventsFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EventActions.loadScreeningEventsFailed),
        tap(() => this.notificationService.error('Events.loadingFailed'))
      ),
    { dispatch: false }
  );

  /* LOAD SCREENING EVENT BY ID */

  loadScreeningEventById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EventActions.loadScreeningEventById),
      filter((params) => params?.id?.length > 0),
      switchMap((params) =>
        this.analogHttpService.getScreeningEventById(params.id).pipe(
          map((screeningEvent) =>
            EventActions.loadScreeningEventByIdSucceeded({ screeningEvent })
          ),
          catchError((error) =>
            of(EventActions.loadScreeningEventByIdFailed({ error }))
          )
        )
      )
    );
  });

  loadScreeningEventByIdSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EventActions.loadScreeningEventByIdSucceeded),
        tap(() => this.notificationService.success('Event.loadingSucceeded'))
      ),
    { dispatch: false }
  );

  loadScreeningEventByIdFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EventActions.loadScreeningEventByIdFailed),
        tap(() => this.notificationService.error('Event.loadingFailed'))
      ),
    { dispatch: false }
  );

  /* CREATE SCREENING EVENT BY ID */

  createScreeningEvent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(triggerScreeningEventCreation),
      filter((params) => neitherNullNorUndefined(params?.screeningEvent)),
      switchMap((params) =>
        this.analogHttpService
          .createScreeningEvent(params?.screeningEvent)
          .pipe(
            map((screeningEvent) =>
              EventActions.createScreeningEventSucceeded({ screeningEvent })
            ),
            catchError((error) =>
              of(EventActions.createScreeningEventFailed({ error }))
            )
          )
      )
    );
  });

  createScreeningEventSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EventActions.createScreeningEventSucceeded),
        tap(() => this.notificationService.success('Event.createSucceeded'))
      ),
    { dispatch: false }
  );

  createScreeningEventFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EventActions.createScreeningEventFailed),
        tap(() => this.notificationService.error('Event.createFailed'))
      ),
    { dispatch: false }
  );

  /* UPDATE SCREENING EVENT BY ID */

  updateScreeningEvent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(triggerScreeningEventUpdate),
      filter(
        (params) =>
          neitherNullNorUndefined(params?.id) &&
          neitherNullNorUndefined(params?.screeningEvent)
      ),
      switchMap((params) =>
        this.analogHttpService
          .updateScreeningEvent(params?.id, params?.screeningEvent)
          .pipe(
            map((screeningEvent) =>
              EventActions.updateScreeningEventSucceeded({ screeningEvent })
            ),
            catchError((error) =>
              of(EventActions.updateScreeningEventFailed({ error }))
            )
          )
      )
    );
  });

  updateScreeningEventSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EventActions.updateScreeningEventSucceeded),
        tap(() => this.notificationService.success('Event.updateSucceeded'))
      ),
    { dispatch: false }
  );

  updateScreeningEventFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EventActions.updateScreeningEventFailed),
        tap(() => this.notificationService.error('Event.updateFailed'))
      ),
    { dispatch: false }
  );

  /* DELETE SCREENING EVENT BY ID */

  deleteScreeningEvent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(triggerScreeningEventRemoval),
      filter((params) => neitherNullNorUndefined(params?.id)),
      switchMap((params) =>
        this.analogHttpService.deleteScreeningEvent(params?.id).pipe(
          map((id) => EventActions.deleteScreeningEventSucceeded({ id })),
          catchError((error) =>
            of(EventActions.deleteScreeningEventFailed({ error }))
          )
        )
      )
    );
  });

  deleteScreeningEventSucceeded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EventActions.deleteScreeningEventSucceeded),
        tap(() => this.notificationService.success('Event.deleteSucceeded'))
      ),
    { dispatch: false }
  );

  deleteScreeningEventFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EventActions.deleteScreeningEventFailed),
        tap(() => this.notificationService.error('Event.deleteFailed'))
      ),
    { dispatch: false }
  );
}
