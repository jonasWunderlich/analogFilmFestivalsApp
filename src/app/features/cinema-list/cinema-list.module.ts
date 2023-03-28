import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaListComponent } from './cinema-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CinemaListComponent],
  imports: [CommonModule, RouterModule],
  exports: [CinemaListComponent],
})
export class CinemaListModule {}
