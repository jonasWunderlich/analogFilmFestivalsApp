import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PushModule } from '@ngrx/component';
import { ReportCreateComponent } from 'src/app/features/report/report-create/report-create.component';
import { ReportFormComponent } from 'src/app/features/report/report-form/report-form.component';
import { AdminReportRoutingModule } from './admin-report-routing.module';
import { ReportEditComponent } from 'src/app/features/report/report-edit/report-edit.component';

@NgModule({
  declarations: [ReportCreateComponent, ReportEditComponent],
  imports: [
    CommonModule,
    AdminReportRoutingModule,
    ReportFormComponent,
    PushModule,
  ],
})
export class AdminReportModule {}
