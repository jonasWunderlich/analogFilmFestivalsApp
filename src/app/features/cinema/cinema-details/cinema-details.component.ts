import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaDetailsService } from './cinema-details.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema-details.component.html',
  styleUrls: ['./cinema-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CinemaDetailsComponent implements OnInit {
  cinema$ = this.facade.cinema$;
  projections$ = this.facade.projections$;
  reports$ = this.facade.reports$;
  events$ = this.facade.events$;

  constructor(
    private readonly facade: CinemaDetailsService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.facade.setActiveId(params['id']);
    });
  }

  delete(id: string): void {
    this.facade.delete(id);
  }
}
