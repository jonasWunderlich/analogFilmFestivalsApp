import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreeningEventOverviewComponent } from './screening-event-overview/screening-event-overview.component';
import { ScreeningEventDetailsComponent } from './screening-event-details/screening-event-details.component';

const routes: Routes = [
  {
    path: '',
    title: 'Events',
    component: ScreeningEventOverviewComponent,
  },
  {
    path: ':id',
    title: 'Event',
    component: ScreeningEventDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
