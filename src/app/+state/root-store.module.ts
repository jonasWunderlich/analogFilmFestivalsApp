import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CinemaStoreModule } from './cinema-store/cinema-store.module';
import { MovieStoreModule } from './movie-store/movie-store.module';
import { ReportStoreModule } from './report-store/report.module';
import { ScreeningEventStoreModule } from './screening-event-store/screening-event-store.module';
import { ProjectionStoreModule } from './projection-store/projection-store.module';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictActionSerializability: true,
          strictActionTypeUniqueness: true,
          strictActionWithinNgZone: true,
          strictStateImmutability: true,
          strictStateSerializability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    CommonModule,
    ReportStoreModule,
    ScreeningEventStoreModule,
    MovieStoreModule,
    CinemaStoreModule,
    ProjectionStoreModule,
  ],
})
export class RootStoreModule {}
