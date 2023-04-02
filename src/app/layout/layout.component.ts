import { Component } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  $selectedGeoData = this.service.$selectedCinemasOnMap;

  constructor(private readonly service: LayoutService) {}
}
