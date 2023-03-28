import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectionListComponent } from './projection-list.component';

@NgModule({
  declarations: [ProjectionListComponent],
  imports: [CommonModule],
  exports: [ProjectionListComponent],
})
export class ProjectionListModule {}
