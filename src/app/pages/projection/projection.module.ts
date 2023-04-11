import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectionOverviewComponent } from 'src/app/features/projection/projection-overview/projection-overview.component';
import { ProjectionRoutingModule } from './projection-routing.module';
import { ProjectionDetailsComponent } from 'src/app/features/projection/projection-details/projection-details.component';
import { PushModule } from '@ngrx/component';
import { OverviewListActionsComponent } from 'src/app/shared/view/overview-list-actions/overview-list-actions.component';
import { ProjectionService } from 'src/app/features/projection/projection.service';

@NgModule({
  declarations: [ProjectionOverviewComponent, ProjectionDetailsComponent],
  imports: [
    CommonModule,
    ProjectionRoutingModule,
    PushModule,
    OverviewListActionsComponent,
  ],
  providers: [ProjectionService],
})
export class ProjectionModule {}
