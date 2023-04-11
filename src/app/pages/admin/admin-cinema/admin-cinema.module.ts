import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CinemaCreateComponent } from 'src/app/features/cinema/cinema-create/cinema-create.component';
import { CinemaEditComponent } from 'src/app/features/cinema/cinema-edit/cinema-edit.component';
import { CinemaFormComponent } from 'src/app/features/cinema/cinema-form/cinema-form.component';
import { PushModule } from '@ngrx/component';
import { AdminCinemaRoutingModule } from './admin-cinema-routing.module';
import { CinemaService } from 'src/app/features/cinema/cinema.service';

@NgModule({
  declarations: [CinemaCreateComponent, CinemaEditComponent],
  imports: [
    CommonModule,
    AdminCinemaRoutingModule,
    CinemaFormComponent,
    PushModule,
  ],
  providers: [CinemaService],
})
export class AdminCinemaModule {}
