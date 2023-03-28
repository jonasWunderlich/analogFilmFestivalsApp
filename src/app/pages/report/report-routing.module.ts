import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportOverviewComponent } from './report-overview/report-overview.component';

const routes: Routes = [
  {
    path: '',
    title: 'Erfahrungsberichte',
    component: ReportOverviewComponent,
  },
  {
    path: ':id',
    title: 'Erfahrungsbericht',
    component: ReportDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
