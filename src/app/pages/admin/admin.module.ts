import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ScreeningEventCreateComponent } from 'src/app/features/screening-event-create/screening-event-create.component';
import { TwoColumnLayoutComponent } from 'src/app/shared/ui/two-column-layout/two-column-layout.component';
import { CinemaCreateComponent } from 'src/app/features/cinema-create/cinema-create.component';
import { ScreeningEventFormComponent } from 'src/app/features/screening-event-form/screening-event-form.component';
import { CinemaFormComponent } from 'src/app/features/cinema-form/cinema-form.component';

@NgModule({
  declarations: [ScreeningEventCreateComponent, CinemaCreateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TwoColumnLayoutComponent,
    ScreeningEventFormComponent,
    CinemaFormComponent,
  ],
})
export class AdminModule {}
