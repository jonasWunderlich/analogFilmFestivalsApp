import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditoriumListComponent } from './auditorium-list.component';

@NgModule({
  declarations: [AuditoriumListComponent],
  imports: [CommonModule],
  exports: [AuditoriumListComponent],
})
export class AuditoriumListModule {}
