import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  $selectedGeoData = this.service.$selectedGeoData;

  constructor(private readonly service: LayoutService) {}
}
