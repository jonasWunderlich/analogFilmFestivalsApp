import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { CinemaComponent } from './cinema/cinema.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event/event.component';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'event',
    pathMatch: 'full',
  },
  {
    path: 'event',
    component: EventListComponent,
  },
  {
    path: 'event/:id',
    component: EventComponent,
  },
  {
    path: 'cinema',
    component: CinemaListComponent,
  },
  {
    path: 'cinema/:id',
    component: CinemaComponent,
  },
  {
    path: 'report',
    component: ReportListComponent,
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
