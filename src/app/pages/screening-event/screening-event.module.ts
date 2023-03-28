import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreeningEventDetailsComponent } from './screening-event-details/screening-event-details.component';
import { ScreeningEventOverviewComponent } from './screening-event-overview/screening-event-overview.component';
import { EventRoutingModule } from './event-routing.module';
import { TwoColumnLayoutModule } from 'src/app/features/two-column-layout/two-column-layout.module';
import { CalendarModule } from 'src/app/features/calendar/calendar.module';
import { ProjectionListModule } from 'src/app/features/projection-list/projection-list.module';
import { CinemaMapModule } from 'src/app/features/cinema-map/cinema-map.module';
import { MovieListModule } from 'src/app/features/movie-list/movie-list.module';
import { CinemaListModule } from 'src/app/features/cinema-list/cinema-list.module';
import { ReportListModule } from 'src/app/features/report-list/report-list.module';
import { ScreeningEventStoreModule } from 'src/app/root-store/screening-event-store/screening-event-store.module';
import { CinemaStoreModule } from 'src/app/root-store/cinema-store/cinema-store.module';
import { LoadingModule } from 'src/app/shared/modules/ui/loading/loading.module';

@NgModule({
  declarations: [
    ScreeningEventOverviewComponent,
    ScreeningEventDetailsComponent,
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    TwoColumnLayoutModule,
    CalendarModule,
    ProjectionListModule,
    CinemaMapModule,
    MovieListModule,
    CinemaListModule,
    ReportListModule,
    ScreeningEventStoreModule,
    CinemaStoreModule,
    LoadingModule,
  ],
})
export class ScreeningEventModule {}
