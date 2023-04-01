import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TwoColumnLayoutComponent } from 'src/app/shared/layout/two-column-layout/two-column-layout.component';
import { PushModule } from '@ngrx/component';
import { AdminAuditoriumRoutingModule } from './admin-auditorium-routing.module';
import { AuditoriumFormComponent } from 'src/app/features/auditorium/auditorium-form/auditorium-form.component';
import { AuditoriumCreateComponent } from 'src/app/features/auditorium/auditorium-create/auditorium-create.component';

@NgModule({
  declarations: [AuditoriumCreateComponent],
  imports: [
    CommonModule,
    AdminAuditoriumRoutingModule,
    TwoColumnLayoutComponent,
    AuditoriumFormComponent,
    PushModule,
  ],
})
export class AdminAuditoriumModule {}
