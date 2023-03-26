import { Component, Input } from '@angular/core';
import { Auditorium } from 'src/app/_models/auditorium';

@Component({
  selector: 'app-auditorium-list',
  templateUrl: './auditorium-list.component.html',
  styleUrls: ['./auditorium-list.component.scss']
})
export class AuditoriumListComponent {

  @Input() auditoriums: Auditorium[] = [];
}
