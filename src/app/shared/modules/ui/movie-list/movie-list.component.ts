import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TMDbMovieDetails } from '@igorissen/ngx-tmdb-api';
import { TooltipModule } from 'src/app/shared/modules/tooltip/tooltip.module';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, TooltipModule],
})
export class MovieListComponent {
  @Input() movies: TMDbMovieDetails[] = [];
}
