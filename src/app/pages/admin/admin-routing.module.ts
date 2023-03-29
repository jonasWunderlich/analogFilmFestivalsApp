import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditoriumCreateComponent } from 'src/app/features/auditorium-create/auditorium-create.component';
import { CinemaCreateComponent } from 'src/app/features/cinema-create/cinema-create.component';
import { ReportCreateComponent } from 'src/app/features/report-create/report-create.component';
import { ScreeningEventCreateComponent } from 'src/app/features/screening-event-create/screening-event-create.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'event',
    pathMatch: 'full',
  },
  {
    path: 'event',
    title: 'Event erstellen',
    component: ScreeningEventCreateComponent,
  },
  {
    path: 'cinema',
    title: 'Kino erstellen',
    component: CinemaCreateComponent,
  },
  {
    path: 'report',
    title: 'Bericht erstellen',
    component: ReportCreateComponent,
  },
  {
    path: 'auditorium',
    title: 'Kinosaal erstellen',
    component: AuditoriumCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
