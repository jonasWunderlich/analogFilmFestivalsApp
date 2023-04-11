import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LayoutService],
})
export class LayoutComponent {
  service = inject(LayoutService);
  $selectedGeoData = this.service.$selectedGeoData;
}
