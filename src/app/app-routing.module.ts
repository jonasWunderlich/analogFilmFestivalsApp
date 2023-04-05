import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
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
    path: 'projection',
    loadChildren: () =>
      import('./pages/projection/projection.module').then(
        (m) => m.ProjectionModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
    canMatch: [authGuard],
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
