import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromCinema from './cinema.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CinemaEffects } from './cinema.effects';
import { AnalogKinoBackendService } from 'src/app/core/services/analog-kino-http.service';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(fromCinema.cinemaFeatureKey, fromCinema.reducer),
    EffectsModule.forFeature([CinemaEffects]),
  ],
  providers: [AnalogKinoBackendService],
})
export class CinemaStoreModule {}
