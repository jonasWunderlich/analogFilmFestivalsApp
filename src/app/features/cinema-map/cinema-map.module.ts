import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaMapComponent } from './cinema-map.component';

@NgModule({
  declarations: [CinemaMapComponent],
  imports: [CommonModule],
  exports: [CinemaMapComponent],
})
export class CinemaMapModule {}
