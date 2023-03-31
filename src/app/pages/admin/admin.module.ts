import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ScreeningEventCreateComponent } from 'src/app/features/screening-event-create/screening-event-create.component';
import { TwoColumnLayoutComponent } from 'src/app/shared/ui/two-column-layout/two-column-layout.component';
import { CinemaCreateComponent } from 'src/app/features/cinema-create/cinema-create.component';
import { ScreeningEventFormComponent } from 'src/app/features/screening-event-form/screening-event-form.component';
import { CinemaFormComponent } from 'src/app/features/cinema-form/cinema-form.component';
import { ReportCreateComponent } from 'src/app/features/report-create/report-create.component';
import { AuditoriumCreateComponent } from 'src/app/features/auditorium-create/auditorium-create.component';
import { AuditoriumFormComponent } from 'src/app/features/auditorium-form/auditorium-form.component';
import { ProjectionFormComponent } from 'src/app/features/projection-form/projection-form.component';
import { ProjectionCreateComponent } from 'src/app/features/projection-create/projection-create.component';
import { CinemaMapComponent } from 'src/app/shared/ui/cinema-map/cinema-map.component';
import { ReportFormComponent } from 'src/app/features/report-form/report-form.component';
import { ScreeningEventEditComponent } from 'src/app/features/screening-event-edit/screening-event-edit.component';

@NgModule({
  declarations: [
    ScreeningEventCreateComponent,
    ScreeningEventEditComponent,
    CinemaCreateComponent,
    ReportCreateComponent,
    AuditoriumCreateComponent,
    ProjectionCreateComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TwoColumnLayoutComponent,
    ScreeningEventFormComponent,
    CinemaFormComponent,
    ReportFormComponent,
    AuditoriumFormComponent,
    ProjectionFormComponent,
    CinemaMapComponent,
  ],
})
export class AdminModule {}
