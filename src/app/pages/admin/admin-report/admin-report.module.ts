import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PushModule } from '@ngrx/component';
import { ReportCreateComponent } from 'src/app/features/report/report-create/report-create.component';
import { ReportFormComponent } from 'src/app/features/report/report-form/report-form.component';
import { TwoColumnLayoutComponent } from 'src/app/shared/layout/two-column-layout/two-column-layout.component';
import { CinemaMapComponent } from 'src/app/shared/ui/cinema-map/cinema-map.component';
import { AdminReportRoutingModule } from './admin-report-routing.module';

@NgModule({
  declarations: [ReportCreateComponent],
  imports: [
    CommonModule,
    AdminReportRoutingModule,
    TwoColumnLayoutComponent,
    ReportFormComponent,
    CinemaMapComponent,
    PushModule,
  ],
})
export class AdminReportModule {}
