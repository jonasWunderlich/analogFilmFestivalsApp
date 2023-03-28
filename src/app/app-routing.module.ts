import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportComponent } from './pages/report/report.component';
import { ReportOverviewComponent } from './pages/report-overview/report-overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'event',
    pathMatch: 'full',
  },
  {
    path: 'event',
    loadChildren: () =>
      import('./pages/screening-event/screening-event.module').then(
        (m) => m.ScreeningEventModule
      ),
  },
  {
    path: 'cinema',
    loadChildren: () =>
      import('./pages/cinema/cinema.module').then((m) => m.CinemaModule),
  },
  {
    path: 'report',
    component: ReportOverviewComponent,
  },
  {
    path: 'report/:id',
    component: ReportComponent,
  },
  {
    path: '**',
    redirectTo: 'event',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
