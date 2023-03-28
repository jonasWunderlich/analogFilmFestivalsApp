import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Projection } from 'src/app/shared/_models/projection';

@Component({
  selector: 'app-projection-list',
  templateUrl: './projection-list.component.html',
  styleUrls: ['./projection-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectionListComponent {
  @Input() projections: Projection[] = [];
  @Input() showTitle = true;
}
