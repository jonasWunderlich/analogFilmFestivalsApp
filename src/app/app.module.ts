import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
import { CinemaOverviewComponent } from './cinema-overview/cinema-overview.component';
import { EventComponent } from './event/event.component';
import { EventOverviewComponent } from './event-overview/event-overview.component';
import { ReportComponent } from './report/report.component';
import { ReportOverviewComponent } from './report-overview/report-overview.component';
import { MovieStoreModule } from './+state/movie-store/movie-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxTmdbApiModule } from '@igorissen/ngx-tmdb-api';
import { LetModule } from '@ngrx/component';
import { TooltipModule } from './common/ui/tooltip/tooltip.module';
import { CinemaListComponent } from './common/ui/cinema-list/cinema-list.component';
import { ProjectionListComponent } from './common/ui/projection-list/projection-list.component';
import { ReportListComponent } from './common/ui/report-list/report-list.component';
import { AuditoriumListComponent } from './common/ui/auditorium-list/auditorium-list.component';
import { MovieListComponent } from './common/ui/movie-list/movie-list.component';
import { ReportStoreModule } from './+state/report-store/report.module';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LetModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgxTmdbApiModule.forRoot({ apiKey: '05180a707de5ada5dc9a38cd1f8da87b' }),
    MovieStoreModule,
    ReportStoreModule,
    FullCalendarModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
