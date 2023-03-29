import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ScreeningEventCreateComponent } from 'src/app/features/screening-event-create/screening-event-create.component';
import { ScreeningEventFormComponent } from 'src/app/features/screening-event-form/screening-event-form.component';
import { TwoColumnLayoutComponent } from 'src/app/shared/ui/two-column-layout/two-column-layout.component';

@NgModule({
  declarations: [ScreeningEventCreateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TwoColumnLayoutComponent,
    ScreeningEventFormComponent,
  ],
})
export class AdminModule {}
