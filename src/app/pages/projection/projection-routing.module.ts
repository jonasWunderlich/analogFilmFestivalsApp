import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectionDetailsComponent } from 'src/app/features/projection/projection-details/projection-details.component';
import { ProjectionOverviewComponent } from 'src/app/features/projection/projection-overview/projection-overview.component';

const routes: Routes = [
  {
    path: '',
    title: 'Projektionen',
    component: ProjectionOverviewComponent,
  },
  {
    path: ':id',
    title: 'Projektion',
    component: ProjectionDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectionRoutingModule {}
