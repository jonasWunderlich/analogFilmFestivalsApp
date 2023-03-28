import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaListComponent } from './cinema-list.component';
import { RoutingModule } from 'src/app/root-store/routing-store/routing.module';

@NgModule({
  declarations: [CinemaListComponent],
  imports: [CommonModule, RoutingModule],
  exports: [CinemaListComponent],
})
export class CinemaListModule {}
