import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectionService } from '../projection.service';
import {
  Projection,
  ProjectionCreate,
} from 'src/app/shared/_models/projection';

@Component({
  selector: 'app-projection-edit',
  templateUrl: './projection-edit.component.html',
  styleUrls: ['./projection-edit.component.scss'],
})
export class ProjectionEditComponent implements OnInit {
  projectionId = this.service.activeProjectionId;
  projection$ = this.service.activeProjection$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: ProjectionService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.setActiveProjection(params['id']);
    });
  }

  update(item: ProjectionCreate) {
    this.service.update(item);
  }

  delete(projection: Projection) {
    this.service.delete(projection.id);
  }
}
