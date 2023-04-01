import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromProjection from './projection.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProjectionEffects } from './projection.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(
      fromProjection.projectionFeatureKey,
      fromProjection.reducer
    ),
    EffectsModule.forFeature([ProjectionEffects]),
  ],
})
export class ProjectionStoreModule {}
