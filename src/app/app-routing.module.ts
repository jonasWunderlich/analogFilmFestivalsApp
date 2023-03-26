import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CinemaComponent } from './cinema/cinema.component';
import { CinemaOverviewComponent } from './cinema-overview/cinema-overview.component';
import { EventComponent } from './event/event.component';
import { EventOverviewComponent } from './event-overview/event-overview.component';
import { ReportComponent } from './report/report.component';
import { ReportOverviewComponent } from './report-overview/report-overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'event',
    pathMatch: 'full',
  },
  {
    path: 'event',
    component: EventOverviewComponent,
  },
  {
    path: 'event/:id',
    component: EventComponent,
  },
  {
    path: 'cinema',
    component: CinemaOverviewComponent,
  },
  {
    path: 'cinema/:id',
    component: CinemaComponent,
  },
  {
    path: 'report',
    component: ReportOverviewComponent,
  },
  {
    path: 'report/:id',
    component: ReportComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
