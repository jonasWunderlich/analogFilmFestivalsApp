import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaCreate, Cinema } from 'src/app/shared/_models/cinema';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-cinema-edit',
  templateUrl: './cinema-edit.component.html',
  styleUrls: ['./cinema-edit.component.scss'],
})
export class CinemaEditComponent implements OnInit {
  cinema$ = this.service.cinema$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly service: CinemaService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.setActiveCinema(params['id']);
    });
  }

  update(item: CinemaCreate) {
    this.service.update(item);
  }

  delete(cinema: Cinema) {
    this.service.delete(cinema.id);
  }
}
