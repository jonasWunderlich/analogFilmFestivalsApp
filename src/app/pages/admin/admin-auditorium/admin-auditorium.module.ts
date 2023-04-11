import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PushModule } from '@ngrx/component';
import { AdminAuditoriumRoutingModule } from './admin-auditorium-routing.module';
import { AuditoriumFormComponent } from 'src/app/features/auditorium/auditorium-form/auditorium-form.component';
import { AuditoriumCreateComponent } from 'src/app/features/auditorium/auditorium-create/auditorium-create.component';
import { AuditoriumService } from 'src/app/features/auditorium/auditorium.service';

@NgModule({
  declarations: [AuditoriumCreateComponent],
  imports: [
    CommonModule,
    AdminAuditoriumRoutingModule,
    AuditoriumFormComponent,
    PushModule,
  ],
  providers: [AuditoriumService],
})
export class AdminAuditoriumModule {}
