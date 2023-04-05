import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Auditorium } from 'src/app/core/_models/auditorium';

@Component({
  selector: 'app-auditorium-list',
  templateUrl: './auditorium-list.component.html',
  styleUrls: ['./auditorium-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor],
})
export class AuditoriumListComponent {
  @Input() auditoriums: Auditorium[] = [];
}
