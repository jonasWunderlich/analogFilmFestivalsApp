import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PushModule } from '@ngrx/component';
import { ScreeningEventCreateComponent } from 'src/app/features/screening-event/screening-event-create/screening-event-create.component';
import { ScreeningEventFormComponent } from 'src/app/features/screening-event/screening-event-form/screening-event-form.component';
import { AdminScreeningEventRoutingModule } from './admin-event-routing.module';
import { TwoColumnLayoutComponent } from 'src/app/shared/layout/two-column-layout/two-column-layout.component';
import { ScreeningEventEditComponent } from 'src/app/features/screening-event/screening-event-edit/screening-event-edit.component';

@NgModule({
  declarations: [ScreeningEventCreateComponent, ScreeningEventEditComponent],
  imports: [
    CommonModule,
    AdminScreeningEventRoutingModule,
    TwoColumnLayoutComponent,
    ScreeningEventFormComponent,
    PushModule,
  ],
})
export class AdminEventModule {}
