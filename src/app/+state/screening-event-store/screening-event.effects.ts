import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap, tap } from 'rxjs';

import { AnalogKinoBackendService } from 'src/app/_services/analog-kino-backend.service';
import { NotificationService } from 'src/app/_services/notification.service';
import * as EventActions from './screening-event.actions';


@Injectable()
export class EventEffects {

  loadScreeningEvents$ = createEffect(
    () => this.actions$.pipe(
      ofType(EventActions.loadScreeningEvents),
      switchMap(() =>
        this.analogCinemaBackend.getScreeningEvents().pipe(
          map(screeningEvents => EventActions.loadScreeningEventsSucceeded({ screeningEvents })),
          catchError((error) => of(EventActions.loadScreeningEventsFailed({ error })))
        )
      )
    )
  );

  loadScreeningEventsSucceeded$ = createEffect(
    () => this.actions$.pipe(
      ofType(EventActions.loadScreeningEventsSucceeded),
      tap(() => this.notificationService.success('Event.loadingSucceed'))
    ), { dispatch: false }
  );

  loadScreeningEventsFailed$ = createEffect(
    () => this.actions$.pipe(
      ofType(EventActions.loadScreeningEventsFailed),
      tap(() => this.notificationService.error('Event.loadingFailed'))
    ), { dispatch: false }
  );

  loadScreeningEventById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EventActions.loadScreeningEventById),
      filter(params => params?.id?.length > 0),
      switchMap((params) =>
      this.analogCinemaBackend.getScreeningEventById(params.id).pipe(
          map(screeningEvent => EventActions.loadScreeningEventByIdSucceeded({ screeningEvent })),
          catchError((error) => of(EventActions.loadScreeningEventByIdFailed({ error })))
        )
      )
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly analogCinemaBackend: AnalogKinoBackendService,
    private readonly notificationService: NotificationService) {}
}
