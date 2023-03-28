import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Cinema } from 'src/app/shared/_models/cinema';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CinemaListComponent {
  _cinemas: Cinema[] = [];

  @Input()
  set cinemas(value: Cinema[] | null) {
    if (value) {
      this._cinemas = value;
    }
  }

  get cinemas(): Cinema[] {
    return this._cinemas;
  }
}
