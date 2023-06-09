import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Projection } from 'src/app/core/_models/projection';

@Component({
  selector: 'app-projection-list',
  templateUrl: './projection-list.component.html',
  styleUrls: ['./projection-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, RouterLink],
})
export class ProjectionListComponent {
  private _projections: Projection[] = [];
  private _showTitle = true;

  @Input()
  set projections(value: Projection[] | undefined) {
    if (value) {
      this._projections = value;
    }
  }
  get projections() {
    return this._projections;
  }

  @Input()
  set showTitle(value: boolean) {
    if (value) {
      this._showTitle = value;
    }
  }

  get showTitle() {
    return this._showTitle;
  }
}
