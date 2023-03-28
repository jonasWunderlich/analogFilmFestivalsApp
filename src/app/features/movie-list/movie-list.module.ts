import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { TooltipModule } from 'src/app/shared/modules/tooltip/tooltip.module';
import { NgxTmdbApiModule } from '@igorissen/ngx-tmdb-api';

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    TooltipModule,
    NgxTmdbApiModule.forRoot({ apiKey: '05180a707de5ada5dc9a38cd1f8da87b' }),
  ],
  exports: [MovieListComponent],
})
export class MovieListModule {}
