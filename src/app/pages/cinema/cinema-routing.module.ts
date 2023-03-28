import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaDetailsComponent } from './cinema-details/cinema-details.component';
import { CinemaOverviewComponent } from './cinema-overview/cinema-overview.component';

const routes: Routes = [
  {
    path: '',
    component: CinemaOverviewComponent,
  },
  {
    path: ':id',
    component: CinemaDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CinemaRoutingModule {}
