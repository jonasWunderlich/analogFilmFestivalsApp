import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event-list/event-list.component';
import { ReportComponent } from './report/report.component';
import { ReportListComponent } from './report-list/report-list.component';
import { MovieStoreModule } from './+state/movie-store/movie-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxTmdbApiModule } from '@igorissen/ngx-tmdb-api';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    CinemaListComponent,
    EventComponent,
    EventListComponent,
    ReportComponent,
    ReportListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgxTmdbApiModule.forRoot({ apiKey: '05180a707de5ada5dc9a38cd1f8da87b' }),
    MovieStoreModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
