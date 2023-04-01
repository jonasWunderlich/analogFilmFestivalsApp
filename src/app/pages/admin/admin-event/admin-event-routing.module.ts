import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreeningEventCreateComponent } from 'src/app/features/screening-event/screening-event-create/screening-event-create.component';
import { ScreeningEventEditComponent } from 'src/app/features/screening-event/screening-event-edit/screening-event-edit.component';

const routes: Routes = [
  {
    path: '',
    title: 'Event erstellen',
    component: ScreeningEventCreateComponent,
  },
  {
    path: ':id',
    title: 'Event bearbeiten',
    component: ScreeningEventEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminScreeningEventRoutingModule {}
