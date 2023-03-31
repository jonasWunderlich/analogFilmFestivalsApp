import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreeningEventDetailsComponent } from 'src/app/features/screening-event/screening-event-details/screening-event-details.component';
import { ScreeningEventOverviewComponent } from 'src/app/features/screening-event/screening-event-overview/screening-event-overview.component';

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
