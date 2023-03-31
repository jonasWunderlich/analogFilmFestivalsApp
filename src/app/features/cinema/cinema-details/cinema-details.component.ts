import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema-details.component.html',
  styleUrls: ['./cinema-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CinemaDetailsComponent implements OnInit {
  cinema$ = this.detailsService.cinema$;
  projections = this.detailsService.projections;

  constructor(
    private readonly detailsService: CinemaService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.detailsService.setActiveCinema(params['id']);
    });
  }
}
