import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaComponent } from './pages/cinema/cinema.component';
import { CinemaOverviewComponent } from './pages/cinema-overview/cinema-overview.component';
import { EventComponent } from './pages/event/event.component';
import { EventOverviewComponent } from './pages/event-overview/event-overview.component';
import { ReportComponent } from './pages/report/report.component';
import { ReportOverviewComponent } from './pages/report-overview/report-overview.component';
import { MovieStoreModule } from './root-store/movie-store/movie-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LetModule } from '@ngrx/component';
import { ScreeningEventStoreModule } from './root-store/screening-event-store/screening-event-store.module';
import { CinemaStoreModule } from './root-store/cinema-store/cinema-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RoutingModule } from './root-store/routing-store/routing.module';
import { CinemaMapModule } from './features/cinema-map/cinema-map.module';
import { MovieListModule } from './features/movie-list/movie-list.module';
import { CinemaListModule } from './features/cinema-list/cinema-list.module';
import { ReportListModule } from './features/report-list/report-list.module';
import { ProjectionListModule } from './features/projection-list/projection-list.module';
import { AuditoriumListModule } from './features/auditorium-list/auditorium-list.module';
import { CalendarModule } from './features/calendar/calendar.module';
import { ReportStoreModule } from './root-store/report-store/report.module';
import { TwoColumnLayoutModule } from './features/two-column-layout/two-column-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    EventComponent,
    ReportComponent,
    CinemaOverviewComponent,
    EventOverviewComponent,
    ReportOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    LetModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    // Feature Modules
    MovieListModule,
    CinemaListModule,
    ReportListModule,
    ProjectionListModule,
    AuditoriumListModule,
    CinemaMapModule,
    CalendarModule,
    // Store Modules
    ReportStoreModule,
    ScreeningEventStoreModule,
    MovieStoreModule,
    CinemaStoreModule,
    TwoColumnLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
