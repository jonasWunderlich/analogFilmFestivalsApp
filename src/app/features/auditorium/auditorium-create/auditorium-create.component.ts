import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuditoriumCreate } from 'src/app/core/_models/auditorium';
import { AuditoriumCreateFacadeService } from './auditorium-create.service';

@Component({
  selector: 'app-auditorium-create',
  templateUrl: './auditorium-create.component.html',
  styleUrls: ['./auditorium-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuditoriumCreateFacadeService],
})
export class AuditoriumCreateComponent {
  constructor(private readonly service: AuditoriumCreateFacadeService) {}

  create(auditorium: AuditoriumCreate) {
    this.service.create(auditorium);
  }
}
