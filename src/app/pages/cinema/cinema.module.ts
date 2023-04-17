import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PushModule } from '@ngrx/component';
import { CinemaDetailsComponent } from 'src/app/features/cinema/cinema-details/cinema-details.component';
import { CinemaOverviewComponent } from 'src/app/features/cinema/cinema-overview/cinema-overview.component';
import { CinemaService } from 'src/app/features/cinema/cinema.service';
import { LoadingComponent } from 'src/app/shared/ui/loading/loading.component';
import { AuditoriumListComponent } from 'src/app/shared/view/auditorium-list/auditorium-list.component';
import { OverviewListActionsComponent } from 'src/app/shared/view/overview-list-actions/overview-list-actions.component';
import { ProjectionListComponent } from 'src/app/shared/view/projection-list/projection-list.component';
import { ReportListComponent } from 'src/app/shared/view/report-list/report-list.component';
import { CinemaRoutingModule } from './cinema-routing.module';

@NgModule({
  declarations: [CinemaOverviewComponent, CinemaDetailsComponent],
  imports: [
    CommonModule,
    CinemaRoutingModule,
    ProjectionListComponent,
    AuditoriumListComponent,
    ReportListComponent,
    PushModule,
    OverviewListActionsComponent,
    LoadingComponent,
  ],
  providers: [CinemaService],
})
export class CinemaModule {}
