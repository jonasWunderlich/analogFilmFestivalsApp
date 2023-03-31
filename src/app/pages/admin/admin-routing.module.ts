import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditoriumCreateComponent } from 'src/app/features/auditorium/auditorium-create/auditorium-create.component';
import { CinemaCreateComponent } from 'src/app/features/cinema/cinema-create/cinema-create.component';
import { CinemaEditComponent } from 'src/app/features/cinema/cinema-edit/cinema-edit.component';
import { ProjectionCreateComponent } from 'src/app/features/projection/projection-create/projection-create.component';
import { ProjectionEditComponent } from 'src/app/features/projection/projection-edit/projection-edit.component';
import { ReportCreateComponent } from 'src/app/features/report/report-create/report-create.component';
import { ScreeningEventCreateComponent } from 'src/app/features/screening-event/screening-event-create/screening-event-create.component';
import { ScreeningEventEditComponent } from 'src/app/features/screening-event/screening-event-edit/screening-event-edit.component';

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
    path: 'editevent/:id',
    title: 'Event bearbeiten',
    component: ScreeningEventEditComponent,
  },
  {
    path: 'cinema',
    title: 'Kino erstellen',
    component: CinemaCreateComponent,
  },
  {
    path: 'editcinema/:id',
    title: 'Kino bearbeiten',
    component: CinemaEditComponent,
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
  {
    path: 'projection',
    title: 'Projektion erstellen',
    component: ProjectionCreateComponent,
  },
  {
    path: 'editprojection/:id',
    title: 'Projektion bearbeiten',
    component: ProjectionEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
