import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportCreateComponent } from 'src/app/features/report/report-create/report-create.component';
import { ReportEditComponent } from 'src/app/features/report/report-edit/report-edit.component';

const routes: Routes = [
  {
    path: '',
    title: 'Erfahrungsbericht erstellen',
    component: ReportCreateComponent,
  },
  {
    path: ':id',
    title: 'Erfahrungsbericht bearbeiten',
    component: ReportEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminReportRoutingModule {}
