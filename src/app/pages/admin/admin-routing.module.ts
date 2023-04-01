import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'event',
    pathMatch: 'full',
  },
  {
    path: 'event',
    loadChildren: () =>
      import('./admin-event/admin-event.module').then(
        (m) => m.AdminEventModule
      ),
  },
  {
    path: 'cinema',
    loadChildren: () =>
      import('./admin-cinema/admin-cinema.module').then(
        (m) => m.AdminCinemaModule
      ),
  },
  {
    path: 'cinema',
    loadChildren: () =>
      import('./admin-report/admin-report.module').then(
        (m) => m.AdminReportModule
      ),
  },
  {
    path: 'auditorium',
    loadChildren: () =>
      import('./admin-auditorium/admin-auditorium.module').then(
        (m) => m.AdminAuditoriumModule
      ),
  },
  {
    path: 'projection',
    loadChildren: () =>
      import('./admin-projection/admin-projection.module').then(
        (m) => m.AdminProjectionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
