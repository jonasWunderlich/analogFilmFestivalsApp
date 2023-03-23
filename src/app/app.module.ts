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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
