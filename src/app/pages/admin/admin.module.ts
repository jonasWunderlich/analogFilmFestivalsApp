import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuditoriumCreateComponent } from 'src/app/features/auditorium-create/auditorium-create.component';
import { AuditoriumFormComponent } from 'src/app/features/auditorium-form/auditorium-form.component';
import { CinemaCreateComponent } from 'src/app/features/cinema/cinema-create/cinema-create.component';
import { CinemaEditComponent } from 'src/app/features/cinema/cinema-edit/cinema-edit.component';
import { CinemaFormComponent } from 'src/app/features/cinema/cinema-form/cinema-form.component';
import { ProjectionCreateComponent } from 'src/app/features/projection-create/projection-create.component';
import { ProjectionFormComponent } from 'src/app/features/projection-form/projection-form.component';
import { ReportCreateComponent } from 'src/app/features/report-create/report-create.component';
import { ReportFormComponent } from 'src/app/features/report-form/report-form.component';
import { ScreeningEventCreateComponent } from 'src/app/features/screening-event/screening-event-create/screening-event-create.component';
import { ScreeningEventEditComponent } from 'src/app/features/screening-event/screening-event-edit/screening-event-edit.component';
import { ScreeningEventFormComponent } from 'src/app/features/screening-event/screening-event-form/screening-event-form.component';
import { CinemaMapComponent } from 'src/app/shared/ui/cinema-map/cinema-map.component';
import { TwoColumnLayoutComponent } from 'src/app/shared/ui/two-column-layout/two-column-layout.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    ScreeningEventCreateComponent,
    ScreeningEventEditComponent,
    CinemaCreateComponent,
    CinemaEditComponent,
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
