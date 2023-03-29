import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CinemaOverviewService } from './cinema-overview.service';

@Component({
  selector: 'app-cinema-overview',
  templateUrl: './cinema-overview.component.html',
  styleUrls: ['./cinema-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CinemaOverviewComponent {
  cinemas$ = this.overviewService.cinemas$;

  constructor(private readonly overviewService: CinemaOverviewService) {}
}
