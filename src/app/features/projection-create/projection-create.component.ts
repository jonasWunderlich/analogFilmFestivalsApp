import { Component } from '@angular/core';
import { ProjectionCreate } from 'src/app/shared/_models/projection';
import { ProjectionCreateService } from './projection-create.service';

@Component({
  selector: 'app-projection-create',
  templateUrl: './projection-create.component.html',
  styleUrls: ['./projection-create.component.scss'],
})
export class ProjectionCreateComponent {
  constructor(private readonly service: ProjectionCreateService) {}

  create(projection: Partial<ProjectionCreate>) {
    this.service.create(projection).subscribe();
  }
}
