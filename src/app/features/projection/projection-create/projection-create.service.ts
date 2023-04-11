import { Injectable } from '@angular/core';
import { ProjectionService } from '../projection.service';
import { ProjectionCreate } from 'src/app/core/_models/projection';

@Injectable()
export class ProjectionCreateFacadeService {
  constructor(private readonly common: ProjectionService) {}

  create(projection: ProjectionCreate): void {
    this.common.create(projection);
  }
}
