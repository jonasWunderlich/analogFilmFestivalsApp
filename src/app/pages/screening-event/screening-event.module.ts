import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { ScreeningEventStoreModule } from 'src/app/root-store/screening-event-store/screening-event-store.module';
import { CinemaStoreModule } from 'src/app/root-store/cinema-store/cinema-store.module';
import { LoadingComponent } from 'src/app/shared/ui/loading/loading.component';
import { CinemaListComponent } from 'src/app/shared/ui/cinema-list/cinema-list.component';
import { CalendarComponent } from 'src/app/shared/ui/calendar/calendar.component';
import { MovieListComponent } from 'src/app/shared/ui/movie-list/movie-list.component';
import { ProjectionListComponent } from 'src/app/shared/ui/projection-list/projection-list.component';
import { ReportListComponent } from 'src/app/shared/ui/report-list/report-list.component';
import { TwoColumnLayoutComponent } from 'src/app/shared/ui/two-column-layout/two-column-layout.component';
import { CinemaMapComponent } from 'src/app/shared/ui/cinema-map/cinema-map.component';
import { ScreeningEventDetailsComponent } from 'src/app/features/screening-event-details/screening-event-details.component';
import { ScreeningEventOverviewComponent } from 'src/app/features/screening-event-overview/screening-event-overview.component';

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
    ScreeningEventStoreModule,
    CinemaStoreModule,
    LoadingComponent,
  ],
})
export class ScreeningEventModule {}
