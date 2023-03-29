import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportOverviewComponent } from './report-overview/report-overview.component';
import { CinemaMapModule } from 'src/app/features/cinema-map/cinema-map.module';
import { LoadingComponent } from 'src/app/shared/modules/ui/loading/loading.component';
import { TwoColumnLayoutComponent } from 'src/app/features/two-column-layout/two-column-layout.component';
import { CinemaListComponent } from 'src/app/features/cinema-list/cinema-list.component';
import { MovieListComponent } from 'src/app/features/movie-list/movie-list.component';
import { ProjectionListComponent } from 'src/app/features/projection-list/projection-list.component';

@NgModule({
  declarations: [ReportDetailsComponent, ReportOverviewComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    TwoColumnLayoutComponent,
    ProjectionListComponent,
    CinemaListComponent,
    CinemaMapModule,
    MovieListComponent,
    LoadingComponent,
  ],
})
export class ReportModule {}
