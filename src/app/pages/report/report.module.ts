import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { LoadingComponent } from 'src/app/shared/ui/loading/loading.component';
import { CinemaListComponent } from 'src/app/shared/view/cinema-list/cinema-list.component';
import { MovieListComponent } from 'src/app/shared/view/movie-list/movie-list.component';
import { ProjectionListComponent } from 'src/app/shared/view/projection-list/projection-list.component';
import { CinemaMapComponent } from 'src/app/shared/ui/cinema-map/cinema-map.component';
import { ReportDetailsComponent } from 'src/app/features/report/report-details/report-details.component';
import { ReportOverviewComponent } from 'src/app/features/report/report-overview/report-overview.component';
import { PushModule } from '@ngrx/component';
import { OverviewListActionsComponent } from 'src/app/shared/view/overview-list-actions/overview-list-actions.component';

@NgModule({
  declarations: [ReportDetailsComponent, ReportOverviewComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    ProjectionListComponent,
    CinemaMapComponent,
    CinemaListComponent,
    MovieListComponent,
    LoadingComponent,
    PushModule,
    OverviewListActionsComponent,
  ],
})
export class ReportModule {}
