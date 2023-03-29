import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { CinemaOverviewComponent } from './cinema-overview/cinema-overview.component';
import { CinemaDetailsComponent } from './cinema-details/cinema-details.component';
import { CinemaMapModule } from 'src/app/features/cinema-map/cinema-map.module';
import { LoadingComponent } from 'src/app/shared/modules/ui/loading/loading.component';
import { AuditoriumListComponent } from 'src/app/shared/modules/ui/auditorium-list/auditorium-list.component';
import { ProjectionListComponent } from 'src/app/shared/modules/ui/projection-list/projection-list.component';
import { ReportListComponent } from 'src/app/shared/modules/ui/report-list/report-list.component';
import { TwoColumnLayoutComponent } from 'src/app/shared/modules/ui/two-column-layout/two-column-layout.component';

@NgModule({
  declarations: [CinemaOverviewComponent, CinemaDetailsComponent],
  imports: [
    CommonModule,
    CinemaRoutingModule,
    CinemaMapModule,
    TwoColumnLayoutComponent,
    ProjectionListComponent,
    AuditoriumListComponent,
    ReportListComponent,
    LoadingComponent,
  ],
})
export class CinemaModule {}
