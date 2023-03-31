import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectionService } from '../projection.service';

@Component({
  selector: 'app-projection',
  templateUrl: './projection-details.component.html',
  styleUrls: ['./projection-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectionDetailsComponent implements OnInit {
  activeProjection$ = this.projectionService.activeProjection$;
  allProjections$ = this.projectionService.allProjections$;
  allCinemas$ = this.projectionService.allCinemas$;

  constructor(
    private readonly projectionService: ProjectionService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projectionService.setActiveProjection(params['id']);
    });
  }
}
