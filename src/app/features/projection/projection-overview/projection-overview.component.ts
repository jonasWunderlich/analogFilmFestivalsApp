import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectionOverviewService } from './projection-overview.service';

@Component({
  selector: 'app-projection-overview',
  templateUrl: './projection-overview.component.html',
  styleUrls: ['./projection-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectionOverviewComponent {
  projections$ = this.facade.projections$;

  constructor(private readonly facade: ProjectionOverviewService) {}

  delete(id: string) {
    this.facade.delete(id);
  }
}
