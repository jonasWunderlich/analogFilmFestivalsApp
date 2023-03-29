import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { CinemaOverviewComponent } from './cinema-overview/cinema-overview.component';
import { CinemaDetailsComponent } from './cinema-details/cinema-details.component';
import { CinemaMapModule } from 'src/app/features/cinema-map/cinema-map.module';
import { LoadingComponent } from 'src/app/shared/modules/ui/loading/loading.component';
import { TwoColumnLayoutComponent } from 'src/app/features/two-column-layout/two-column-layout.component';
import { ReportListComponent } from 'src/app/features/report-list/report-list.component';
import { ProjectionListComponent } from 'src/app/features/projection-list/projection-list.component';
import { AuditoriumListComponent } from 'src/app/features/auditorium-list/auditorium-list.component';

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
