import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaCreate, Cinema } from 'src/app/core/_models/cinema';
import { CinemaEditService } from './cinema-edit.service';

@Component({
  selector: 'app-cinema-edit',
  templateUrl: './cinema-edit.component.html',
  styleUrls: ['./cinema-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CinemaEditService],
})
export class CinemaEditComponent implements OnInit {
  cinema$ = this.service.activeCinema$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: CinemaEditService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.setActiveId(params['id']);
    });
  }

  delete(cinema: Cinema) {
    this.service.delete(cinema.id);
  }

  update(item: CinemaCreate) {
    this.service.update(item);
  }
}
