import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Cinema } from 'src/app/core/_models/cinema';
import { CinemaOverviewService } from './cinema-overview.service';

@Component({
  selector: 'app-cinema-overview',
  templateUrl: './cinema-overview.component.html',
  styleUrls: ['./cinema-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CinemaOverviewService],
})
export class CinemaOverviewComponent {
  cinemas$ = this.facade.cinemas$;
  loading$ = this.facade.loading$;

  constructor(private readonly facade: CinemaOverviewService) {
    this.facade.dispatchEnter();
  }

  delete(id: string) {
    this.facade.delete(id);
  }

  trackByCinemaId(index: number, item: Cinema): string {
    return item.id;
  }
}
