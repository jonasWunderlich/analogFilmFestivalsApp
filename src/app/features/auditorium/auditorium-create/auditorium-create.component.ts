import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuditoriumCreate } from 'src/app/core/_models/auditorium';
import { AuditoriumService } from '../auditorium.service';

@Component({
  selector: 'app-auditorium-create',
  templateUrl: './auditorium-create.component.html',
  styleUrls: ['./auditorium-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuditoriumCreateComponent {
  constructor(private readonly service: AuditoriumService) {}

  create(auditorium: AuditoriumCreate) {
    this.service.create(auditorium);
  }
}
