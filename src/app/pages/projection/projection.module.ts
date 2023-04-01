import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoColumnLayoutComponent } from 'src/app/shared/layout/two-column-layout/two-column-layout.component';
import { LoadingComponent } from 'src/app/shared/ui/loading/loading.component';
import { CinemaMapComponent } from 'src/app/shared/ui/cinema-map/cinema-map.component';
import { ProjectionOverviewComponent } from 'src/app/features/projection/projection-overview/projection-overview.component';
import { ProjectionRoutingModule } from './projection-routing.module';
import { ProjectionDetailsComponent } from 'src/app/features/projection/projection-details/projection-details.component';
import { PushModule } from '@ngrx/component';

@NgModule({
  declarations: [ProjectionOverviewComponent, ProjectionDetailsComponent],
  imports: [
    CommonModule,
    ProjectionRoutingModule,
    TwoColumnLayoutComponent,
    LoadingComponent,
    CinemaMapComponent,
    PushModule,
  ],
})
export class ProjectionModule {}
