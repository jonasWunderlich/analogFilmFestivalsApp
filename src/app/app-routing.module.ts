import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
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
