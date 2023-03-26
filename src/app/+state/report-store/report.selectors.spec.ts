import * as fromReport from './report.reducer';
import { selectReportState } from './report.selectors';

describe('Report Selectors', () => {
  it('should select the feature state', () => {
    const result = selectReportState({
      [fromReport.reportFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
