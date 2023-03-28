import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromMovie from './movie.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './movie.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(fromMovie.movieFeatureKey, fromMovie.reducer),
    EffectsModule.forFeature([MovieEffects]),
  ],
})
export class MovieStoreModule {}