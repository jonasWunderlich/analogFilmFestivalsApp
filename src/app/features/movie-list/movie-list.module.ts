import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { TooltipModule } from 'src/app/shared/modules/tooltip/tooltip.module';

@NgModule({
  declarations: [MovieListComponent],
  imports: [CommonModule, TooltipModule],
  exports: [MovieListComponent],
})
export class MovieListModule {}
