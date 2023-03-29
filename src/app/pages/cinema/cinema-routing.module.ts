import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaDetailsComponent } from 'src/app/features/cinema-details/cinema-details.component';
import { CinemaOverviewComponent } from 'src/app/features/cinema-overview/cinema-overview.component';

const routes: Routes = [
  {
    path: '',
    title: 'Kinos',
    component: CinemaOverviewComponent,
  },
  {
    path: ':id',
    title: 'Kino',
    component: CinemaDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CinemaRoutingModule {}
