import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuditoriumCreateComponent } from 'src/app/features/auditorium/auditorium-create/auditorium-create.component';
import { AuditoriumFormComponent } from 'src/app/features/auditorium/auditorium-form/auditorium-form.component';
import { CinemaCreateComponent } from 'src/app/features/cinema/cinema-create/cinema-create.component';
import { CinemaEditComponent } from 'src/app/features/cinema/cinema-edit/cinema-edit.component';
import { CinemaFormComponent } from 'src/app/features/cinema/cinema-form/cinema-form.component';
import { ProjectionCreateComponent } from 'src/app/features/projection/projection-create/projection-create.component';
import { ProjectionFormComponent } from 'src/app/features/projection/projection-form/projection-form.component';
import { ReportCreateComponent } from 'src/app/features/report/report-create/report-create.component';
import { ReportFormComponent } from 'src/app/features/report/report-form/report-form.component';
import { ScreeningEventCreateComponent } from 'src/app/features/screening-event/screening-event-create/screening-event-create.component';
import { ScreeningEventEditComponent } from 'src/app/features/screening-event/screening-event-edit/screening-event-edit.component';
import { ScreeningEventFormComponent } from 'src/app/features/screening-event/screening-event-form/screening-event-form.component';
import { CinemaMapComponent } from 'src/app/shared/ui/cinema-map/cinema-map.component';
import { TwoColumnLayoutComponent } from 'src/app/shared/layout/two-column-layout/two-column-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProjectionEditComponent } from 'src/app/features/projection/projection-edit/projection-edit.component';
import { PushModule } from '@ngrx/component';

@NgModule({
  declarations: [
    ScreeningEventCreateComponent,
    ScreeningEventEditComponent,
    CinemaCreateComponent,
    CinemaEditComponent,
    ReportCreateComponent,
    AuditoriumCreateComponent,
    ProjectionCreateComponent,
    ProjectionEditComponent,
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
    PushModule,
  ],
})
export class AdminModule {}
