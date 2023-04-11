import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PushModule } from '@ngrx/component';
import { ProjectionCreateComponent } from 'src/app/features/projection/projection-create/projection-create.component';
import { ProjectionEditComponent } from 'src/app/features/projection/projection-edit/projection-edit.component';
import { ProjectionFormComponent } from 'src/app/features/projection/projection-form/projection-form.component';
import { AdminProjectionRoutingModule } from './admin-projection-routing.module';
import { ProjectionService } from 'src/app/features/projection/projection.service';

@NgModule({
  declarations: [ProjectionCreateComponent, ProjectionEditComponent],
  imports: [
    CommonModule,
    AdminProjectionRoutingModule,
    ProjectionFormComponent,
    PushModule,
  ],
  providers: [ProjectionService],
})
export class AdminProjectionModule {}
