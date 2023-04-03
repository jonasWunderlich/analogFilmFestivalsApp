import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PushModule } from '@ngrx/component';
import { ScreeningEventDetailsComponent } from 'src/app/features/screening-event/screening-event-details/screening-event-details.component';
import { ScreeningEventOverviewComponent } from 'src/app/features/screening-event/screening-event-overview/screening-event-overview.component';
import { CalendarComponent } from 'src/app/shared/ui/calendar/calendar.component';
import { CinemaListComponent } from 'src/app/shared/view/cinema-list/cinema-list.component';
import { MovieListComponent } from 'src/app/shared/view/movie-list/movie-list.component';
import { ProjectionListComponent } from 'src/app/shared/view/projection-list/projection-list.component';
import { ReportListComponent } from 'src/app/shared/view/report-list/report-list.component';
import ScreeningEventRoutingModule from './screening-event-routing.module';
import { OverviewListActionsComponent } from 'src/app/shared/view/overview-list-actions/overview-list-actions.component';

@NgModule({
  declarations: [
    ScreeningEventOverviewComponent,
    ScreeningEventDetailsComponent,
  ],
  imports: [
    CommonModule,
    ScreeningEventRoutingModule,
    CalendarComponent,
    ProjectionListComponent,
    MovieListComponent,
    CinemaListComponent,
    ReportListComponent,
    PushModule,
    OverviewListActionsComponent,
  ],
})
export class ScreeningEventModule {}
