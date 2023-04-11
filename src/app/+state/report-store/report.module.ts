import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromReport from './report.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ReportEffects } from './report.effects';
import { AnalogKinoBackendService } from 'src/app/core/services/analog-kino-http.service';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(fromReport.reportFeatureKey, fromReport.reducer),
    EffectsModule.forFeature([ReportEffects]),
  ],
  providers: [AnalogKinoBackendService],
})
export class ReportStoreModule {}
