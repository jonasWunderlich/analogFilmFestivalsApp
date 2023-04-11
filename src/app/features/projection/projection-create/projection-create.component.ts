import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectionCreate } from 'src/app/core/_models/projection';
import { ProjectionCreateFacadeService } from './projection-create.service';

@Component({
  selector: 'app-projection-create',
  templateUrl: './projection-create.component.html',
  styleUrls: ['./projection-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProjectionCreateFacadeService],
})
export class ProjectionCreateComponent {
  constructor(private readonly service: ProjectionCreateFacadeService) {}

  create(projection: ProjectionCreate) {
    this.service.create(projection);
  }
}
