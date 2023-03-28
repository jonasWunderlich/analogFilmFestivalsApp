import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromReport from './reducers/report.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ReportEffects } from './effects/report.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(fromReport.reportFeatureKey, fromReport.reducer),
    EffectsModule.forFeature([ReportEffects]),
  ],
})
export class ReportStoreModule {}
