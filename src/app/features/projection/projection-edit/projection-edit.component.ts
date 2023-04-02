import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projection, ProjectionCreate } from 'src/app/core/_models/projection';
import { ProjectionEditService } from './projection-edit.service';

@Component({
  selector: 'app-projection-edit',
  templateUrl: './projection-edit.component.html',
  styleUrls: ['./projection-edit.component.scss'],
})
export class ProjectionEditComponent implements OnInit {
  projection$ = this.service.activeProjection$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: ProjectionEditService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.setActiveId(params['id']);
    });
  }

  update(item: ProjectionCreate) {
    this.service.update(item);
  }

  delete(projection: Projection) {
    this.service.delete(projection.id);
  }
}
