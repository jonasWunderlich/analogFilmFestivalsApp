import { Component, Input } from '@angular/core';
import { Cinema } from 'src/app/_models/cinema';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss'],
})
export class CinemaListComponent {
  @Input() cinemas: Cinema[] = [];
}
