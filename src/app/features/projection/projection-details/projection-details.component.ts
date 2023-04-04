import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectionDetailsService } from './projection-details.service';

@Component({
  selector: 'app-projection',
  templateUrl: './projection-details.component.html',
  styleUrls: ['./projection-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectionDetailsComponent implements OnInit {
  activeProjection$ = this.facade.activeProjection$;

  constructor(
    private readonly facade: ProjectionDetailsService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.facade.dispatch();
    this.route.params.subscribe((params) => {
      this.facade.setActiveId(params['id']);
    });
  }
}
