import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreeningEventDetailsComponent } from './screening-event-details/screening-event-details.component';
import { ScreeningEventOverviewComponent } from './screening-event-overview/screening-event-overview.component';
import { EventRoutingModule } from './event-routing.module';
import { CinemaMapModule } from 'src/app/features/cinema-map/cinema-map.module';
import { ScreeningEventStoreModule } from 'src/app/root-store/screening-event-store/screening-event-store.module';
import { CinemaStoreModule } from 'src/app/root-store/cinema-store/cinema-store.module';
import { LoadingComponent } from 'src/app/shared/modules/ui/loading/loading.component';
import { CinemaListComponent } from 'src/app/shared/modules/ui/cinema-list/cinema-list.component';
import { CalendarComponent } from 'src/app/shared/modules/ui/calendar/calendar.component';
import { MovieListComponent } from 'src/app/shared/modules/ui/movie-list/movie-list.component';
import { ProjectionListComponent } from 'src/app/shared/modules/ui/projection-list/projection-list.component';
import { ReportListComponent } from 'src/app/shared/modules/ui/report-list/report-list.component';
import { TwoColumnLayoutComponent } from 'src/app/shared/modules/ui/two-column-layout/two-column-layout.component';

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
    CinemaMapModule,
    MovieListComponent,
    CinemaListComponent,
    ReportListComponent,
    ScreeningEventStoreModule,
    CinemaStoreModule,
    LoadingComponent,
  ],
})
export class ScreeningEventModule {}
