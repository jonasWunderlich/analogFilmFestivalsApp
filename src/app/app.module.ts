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
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxTmdbApiModule } from '@igorissen/ngx-tmdb-api';
import { LetModule } from '@ngrx/component';
import { TooltipModule } from './shared/modules/tooltip/tooltip.module';
import { CinemaListComponent } from './features/cinema-list/cinema-list.component';
import { ProjectionListComponent } from './features/projection-list/projection-list.component';
import { ReportListComponent } from './features/report-list/report-list.component';
import { AuditoriumListComponent } from './features/auditorium-list/auditorium-list.component';
import { MovieListComponent } from './features/movie-list/movie-list.component';
import { ReportStoreModule } from './root-store/report-store/report.module';
import { ScreeningEventStoreModule } from './root-store/screening-event-store/screening-event-store.module';
import { CinemaStoreModule } from './root-store/cinema-store/cinema-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RoutingModule } from './root-store/routing-store/routing.module';
import { CinemaMapComponent } from './features/cinema-map/cinema-map.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    CinemaOverviewComponent,
    EventComponent,
    EventOverviewComponent,
    ReportComponent,
    ReportOverviewComponent,
    CinemaListComponent,
    ProjectionListComponent,
    ReportListComponent,
    AuditoriumListComponent,
    MovieListComponent,
    CinemaMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LetModule,
    StoreModule.forRoot({}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    RoutingModule,
    EffectsModule.forRoot([]),
    NgxTmdbApiModule.forRoot({ apiKey: '05180a707de5ada5dc9a38cd1f8da87b' }),
    MovieStoreModule,
    ReportStoreModule,
    ScreeningEventStoreModule,
    CinemaStoreModule,
    FullCalendarModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
