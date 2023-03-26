import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import * as fromEvent from './screening-event.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EventEffects } from './screening-event.effects';

@NgModule({
  declarations: [],
  imports: [
  StoreModule.forFeature(fromEvent.screeningEventFeatureKey, fromEvent.reducer),
  EffectsModule.forFeature([EventEffects])],
})
export class ScreeningEventStoreModule {
}
