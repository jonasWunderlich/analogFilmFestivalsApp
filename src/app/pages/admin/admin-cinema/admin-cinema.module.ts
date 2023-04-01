import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CinemaCreateComponent } from 'src/app/features/cinema/cinema-create/cinema-create.component';
import { CinemaEditComponent } from 'src/app/features/cinema/cinema-edit/cinema-edit.component';
import { CinemaFormComponent } from 'src/app/features/cinema/cinema-form/cinema-form.component';
import { CinemaMapComponent } from 'src/app/shared/ui/cinema-map/cinema-map.component';
import { TwoColumnLayoutComponent } from 'src/app/shared/layout/two-column-layout/two-column-layout.component';
import { PushModule } from '@ngrx/component';
import { AdminCinemaRoutingModule } from './admin-cinema-routing.module';

@NgModule({
  declarations: [CinemaCreateComponent, CinemaEditComponent],
  imports: [
    CommonModule,
    AdminCinemaRoutingModule,
    TwoColumnLayoutComponent,
    CinemaFormComponent,
    CinemaMapComponent,
    PushModule,
  ],
})
export class AdminCinemaModule {}
