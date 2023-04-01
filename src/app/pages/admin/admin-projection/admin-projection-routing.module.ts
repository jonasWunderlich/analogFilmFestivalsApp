import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectionCreateComponent } from 'src/app/features/projection/projection-create/projection-create.component';
import { ProjectionEditComponent } from 'src/app/features/projection/projection-edit/projection-edit.component';

const routes: Routes = [
  {
    path: '',
    title: 'Projektion erstellen',
    component: ProjectionCreateComponent,
  },
  {
    path: ':id',
    title: 'Projektion bearbeiten',
    component: ProjectionEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminProjectionRoutingModule {}
