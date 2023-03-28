import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromReport from './report.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ReportEffects } from './report.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(fromReport.reportFeatureKey, fromReport.reducer),
    EffectsModule.forFeature([ReportEffects]),
  ],
})
export class ReportStoreModule {}
