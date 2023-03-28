import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { CinemaOverviewComponent } from './cinema-overview/cinema-overview.component';
import { CinemaDetailsComponent } from './cinema-details/cinema-details.component';
import { TwoColumnLayoutModule } from 'src/app/features/two-column-layout/two-column-layout.module';
import { ProjectionListModule } from 'src/app/features/projection-list/projection-list.module';
import { AuditoriumListModule } from 'src/app/features/auditorium-list/auditorium-list.module';
import { ReportListModule } from 'src/app/features/report-list/report-list.module';
import { CinemaMapModule } from 'src/app/features/cinema-map/cinema-map.module';
import { LetModule } from '@ngrx/component';

@NgModule({
  declarations: [CinemaOverviewComponent, CinemaDetailsComponent],
  imports: [
    CommonModule,
    LetModule,
    CinemaRoutingModule,
    TwoColumnLayoutModule,
    ProjectionListModule,
    AuditoriumListModule,
    ReportListModule,
    CinemaMapModule,
  ],
})
export class CinemaModule {}