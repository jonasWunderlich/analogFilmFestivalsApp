import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
