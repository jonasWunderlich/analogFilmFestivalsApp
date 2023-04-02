import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PushModule } from '@ngrx/component';
import { ScreeningEventCreateComponent } from 'src/app/features/screening-event/screening-event-create/screening-event-create.component';
import { ScreeningEventFormComponent } from 'src/app/features/screening-event/screening-event-form/screening-event-form.component';
import { AdminScreeningEventRoutingModule } from './admin-event-routing.module';
import { ScreeningEventEditComponent } from 'src/app/features/screening-event/screening-event-edit/screening-event-edit.component';

@NgModule({
  declarations: [ScreeningEventCreateComponent, ScreeningEventEditComponent],
  imports: [
    CommonModule,
    AdminScreeningEventRoutingModule,
    ScreeningEventFormComponent,
    PushModule,
  ],
})
export class AdminEventModule {}
