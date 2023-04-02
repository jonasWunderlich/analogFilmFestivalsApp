import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemaCreateComponent } from 'src/app/features/cinema/cinema-create/cinema-create.component';
import { CinemaEditComponent } from 'src/app/features/cinema/cinema-edit/cinema-edit.component';

const routes: Routes = [
  {
    path: '',
    title: 'Kino erstellen',
    component: CinemaCreateComponent,
  },
  {
    path: ':id',
    title: 'Kino bearbeiten',
    component: CinemaEditComponent,
    // TODO: Disable navigation if form has unsaved changes
    // canDeactivate: [(comp: CinemaEditComponent) => ...]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCinemaRoutingModule {}
