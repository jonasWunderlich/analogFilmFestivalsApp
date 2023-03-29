import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportOverviewComponent } from './report-overview/report-overview.component';
import { CinemaMapModule } from 'src/app/features/cinema-map/cinema-map.module';
import { LoadingComponent } from 'src/app/shared/modules/ui/loading/loading.component';
import { CinemaListComponent } from 'src/app/shared/modules/ui/cinema-list/cinema-list.component';
import { MovieListComponent } from 'src/app/shared/modules/ui/movie-list/movie-list.component';
import { ProjectionListComponent } from 'src/app/shared/modules/ui/projection-list/projection-list.component';
import { TwoColumnLayoutComponent } from 'src/app/shared/modules/ui/two-column-layout/two-column-layout.component';

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
