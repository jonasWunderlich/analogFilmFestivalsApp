import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { TwoColumnLayoutModule } from 'src/app/features/two-column-layout/two-column-layout.module';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportOverviewComponent } from './report-overview/report-overview.component';
import { ProjectionListModule } from 'src/app/features/projection-list/projection-list.module';
import { CinemaListModule } from 'src/app/features/cinema-list/cinema-list.module';
import { CinemaMapModule } from 'src/app/features/cinema-map/cinema-map.module';
import { LetModule } from '@ngrx/component';

@NgModule({
  declarations: [ReportDetailsComponent, ReportOverviewComponent],
  imports: [
    CommonModule,
    LetModule,
    ReportRoutingModule,
    TwoColumnLayoutModule,
    ProjectionListModule,
    CinemaListModule,
    CinemaMapModule,
  ],
})
export class ReportModule {}
