import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { CinemaListComponent } from 'src/app/shared/view/cinema-list/cinema-list.component';
import { MovieListComponent } from 'src/app/shared/view/movie-list/movie-list.component';
import { ProjectionListComponent } from 'src/app/shared/view/projection-list/projection-list.component';
import { ReportDetailsComponent } from 'src/app/features/report/report-details/report-details.component';
import { ReportOverviewComponent } from 'src/app/features/report/report-overview/report-overview.component';
import { PushModule } from '@ngrx/component';
import { OverviewListActionsComponent } from 'src/app/shared/view/overview-list-actions/overview-list-actions.component';
import { ReportService } from 'src/app/features/report/report.service';

@NgModule({
  declarations: [ReportDetailsComponent, ReportOverviewComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    ProjectionListComponent,
    CinemaListComponent,
    MovieListComponent,
    PushModule,
    OverviewListActionsComponent,
  ],
  providers: [ReportService],
})
export class ReportModule {}
