import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './screening-event-routing.module';
import { LoadingComponent } from 'src/app/shared/ui/loading/loading.component';
import { CinemaListComponent } from 'src/app/shared/view/cinema-list/cinema-list.component';
import { CalendarComponent } from 'src/app/shared/ui/calendar/calendar.component';
import { MovieListComponent } from 'src/app/shared/view/movie-list/movie-list.component';
import { ProjectionListComponent } from 'src/app/shared/view/projection-list/projection-list.component';
import { ReportListComponent } from 'src/app/shared/view/report-list/report-list.component';
import { TwoColumnLayoutComponent } from 'src/app/shared/layout/two-column-layout/two-column-layout.component';
import { CinemaMapComponent } from 'src/app/shared/ui/cinema-map/cinema-map.component';
import { ScreeningEventDetailsComponent } from 'src/app/features/screening-event/screening-event-details/screening-event-details.component';
import { ScreeningEventOverviewComponent } from 'src/app/features/screening-event/screening-event-overview/screening-event-overview.component';
import { PushModule } from '@ngrx/component';

@NgModule({
  declarations: [
    ScreeningEventOverviewComponent,
    ScreeningEventDetailsComponent,
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    TwoColumnLayoutComponent,
    CalendarComponent,
    ProjectionListComponent,
    CinemaMapComponent,
    MovieListComponent,
    CinemaListComponent,
    ReportListComponent,
    LoadingComponent,
    PushModule,
  ],
})
export class ScreeningEventModule {}
