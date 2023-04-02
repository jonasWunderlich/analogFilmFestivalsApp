import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { LoadingComponent } from 'src/app/shared/ui/loading/loading.component';
import { AuditoriumListComponent } from 'src/app/shared/view/auditorium-list/auditorium-list.component';
import { ProjectionListComponent } from 'src/app/shared/view/projection-list/projection-list.component';
import { ReportListComponent } from 'src/app/shared/view/report-list/report-list.component';
import { TwoColumnLayoutComponent } from 'src/app/shared/layout/two-column-layout/two-column-layout.component';
import { CinemaMapComponent } from 'src/app/shared/ui/cinema-map/cinema-map.component';
import { CinemaDetailsComponent } from 'src/app/features/cinema/cinema-details/cinema-details.component';
import { CinemaOverviewComponent } from 'src/app/features/cinema/cinema-overview/cinema-overview.component';
import { PushModule } from '@ngrx/component';
import { OverviewListActionsComponent } from 'src/app/shared/view/overview-list-actions/overview-list-actions.component';

@NgModule({
  declarations: [CinemaOverviewComponent, CinemaDetailsComponent],
  imports: [
    CommonModule,
    CinemaRoutingModule,
    CinemaMapComponent,
    TwoColumnLayoutComponent,
    ProjectionListComponent,
    AuditoriumListComponent,
    ReportListComponent,
    LoadingComponent,
    PushModule,
    OverviewListActionsComponent,
  ],
})
export class CinemaModule {}
