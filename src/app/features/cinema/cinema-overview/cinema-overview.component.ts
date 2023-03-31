import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-cinema-overview',
  templateUrl: './cinema-overview.component.html',
  styleUrls: ['./cinema-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CinemaOverviewComponent {
  cinemas$ = this.cinemaService.cinemas$;

  constructor(private readonly cinemaService: CinemaService) {}

  delete(id: string) {
    this.cinemaService.delete(id);
  }
}
