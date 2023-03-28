import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportDetailsComponent } from './pages/report/report-details/report-details.component';

import { ReportOverviewComponent } from './pages/report/report-overview/report-overview.component';

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
    loadChildren: () =>
      import('./pages/report/report.module').then((m) => m.ReportModule),
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
