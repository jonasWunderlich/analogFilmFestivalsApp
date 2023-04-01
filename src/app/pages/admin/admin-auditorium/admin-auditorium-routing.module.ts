import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditoriumCreateComponent } from 'src/app/features/auditorium/auditorium-create/auditorium-create.component';

const routes: Routes = [
  {
    path: '',
    title: 'Kinosaal erstellen',
    component: AuditoriumCreateComponent,
  },
  // {
  //   path: ':id',
  //   title: 'Kinosaal bearbeiten',
  //   component: AuditoriumEditComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAuditoriumRoutingModule {}
