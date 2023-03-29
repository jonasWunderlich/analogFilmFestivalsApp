import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { CinemaOverviewComponent } from './cinema-overview/cinema-overview.component';
import { CinemaDetailsComponent } from './cinema-details/cinema-details.component';
import { LoadingComponent } from 'src/app/shared/ui/loading/loading.component';
import { AuditoriumListComponent } from 'src/app/shared/ui/auditorium-list/auditorium-list.component';
import { ProjectionListComponent } from 'src/app/shared/ui/projection-list/projection-list.component';
import { ReportListComponent } from 'src/app/shared/ui/report-list/report-list.component';
import { TwoColumnLayoutComponent } from 'src/app/shared/ui/two-column-layout/two-column-layout.component';
import { CinemaMapComponent } from 'src/app/shared/ui/cinema-map/cinema-map.component';

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
  ],
})
export class CinemaModule {}
