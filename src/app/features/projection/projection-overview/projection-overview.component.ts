import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectionService } from '../projection.service';

@Component({
  selector: 'app-projection-overview',
  templateUrl: './projection-overview.component.html',
  styleUrls: ['./projection-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectionOverviewComponent {
  allCinemas$ = this.projectionService.allCinemas$;
  allProjections$ = this.projectionService.allProjections$;

  constructor(private readonly projectionService: ProjectionService) {}

  delete(id: string) {
    this.projectionService.delete(id);
  }
}
