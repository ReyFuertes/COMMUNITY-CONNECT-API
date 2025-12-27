import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReportsState } from './reports.reducer';

export const selectReportsState = createFeatureSelector<ReportsState>('reports');

export const selectReportTypes = createSelector(
  selectReportsState,
  (state) => state.reportTypes
);

export const selectMaintenanceReports = createSelector(
  selectReportsState,
  (state) => state.maintenanceReports
);

export const selectFinanceReports = createSelector(
  selectReportsState,
  (state) => state.financeReports
);

export const selectReportsLoading = createSelector(
  selectReportsState,
  (state) => state.loading
);

export const selectReportsError = createSelector(
  selectReportsState,
  (state) => state.error
);
