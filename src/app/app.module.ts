import { InjectionToken, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
  registerLocaleData,
} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { LetModule } from '@ngrx/component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuditoriumListModule } from './features/auditorium-list/auditorium-list.module';
import { CalendarModule } from './features/calendar/calendar.module';
import { CinemaListModule } from './features/cinema-list/cinema-list.module';
import { CinemaMapModule } from './features/cinema-map/cinema-map.module';
import { MovieListModule } from './features/movie-list/movie-list.module';
import { ProjectionListModule } from './features/projection-list/projection-list.module';
import { ReportListModule } from './features/report-list/report-list.module';
import { ReportOverviewComponent } from './pages/report-overview/report-overview.component';
import { ReportComponent } from './pages/report/report.component';
import { TwoColumnLayoutModule } from './features/two-column-layout/two-column-layout.module';
import { EffectsModule } from '@ngrx/effects';
import { CinemaStoreModule } from './root-store/cinema-store/cinema-store.module';
import { MovieStoreModule } from './root-store/movie-store/movie-store.module';
import { ScreeningEventStoreModule } from './root-store/screening-event-store/screening-event-store.module';
import { ReportStoreModule } from './root-store/report-store/report.module';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { NgxTmdbApiModule } from '@igorissen/ngx-tmdb-api';
registerLocaleData(localeDe);

export const APP_TITLE = new InjectionToken<string>('app-title');

@NgModule({
  declarations: [AppComponent, ReportComponent, ReportOverviewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LetModule,
    // Store Modules
    StoreModule.forRoot({}, {}),
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
    //StoreRootModule,
    //Feature Modules
    MovieListModule,
    CinemaListModule,
    ReportListModule,
    ProjectionListModule,
    AuditoriumListModule,
    CinemaMapModule,
    CalendarModule,
    TwoColumnLayoutModule,
    NgxTmdbApiModule.forRoot({ apiKey: '05180a707de5ada5dc9a38cd1f8da87b' }),
  ],
  providers: [
    { provide: APP_TITLE, useValue: 'analogkino.net' },
    { provide: LOCALE_ID, useValue: 'de-DE' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
