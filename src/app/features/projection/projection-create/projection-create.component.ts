import { Component } from '@angular/core';
import { ProjectionCreate } from 'src/app/core/_models/projection';
import { ProjectionService } from '../projection.service';

@Component({
  selector: 'app-projection-create',
  templateUrl: './projection-create.component.html',
  styleUrls: ['./projection-create.component.scss'],
})
export class ProjectionCreateComponent {
  constructor(private readonly service: ProjectionService) {}

  create(projection: ProjectionCreate) {
    this.service.create(projection);
  }
}
