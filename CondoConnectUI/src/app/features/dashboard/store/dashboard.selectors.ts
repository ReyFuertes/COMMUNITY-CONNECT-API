import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from './dashboard.reducer';

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const selectMaintenanceRequests = createSelector(
  selectDashboardState,
  (state) => state.maintenanceRequests
);

export const selectReports = createSelector(
  selectDashboardState,
  (state) => state.reports
);

export const selectViolations = createSelector(
  selectDashboardState,
  (state) => state.violations
);

export const selectPayments = createSelector(
  selectDashboardState,
  (state) => state.payments
);

export const selectTodayBookings = createSelector(
  selectDashboardState,
  (state) => state.todayBookings
);

export const selectPendingApprovals = createSelector(
  selectDashboardState,
  (state) => state.pendingApprovals
);

export const selectPeople = createSelector(
  selectDashboardState,
  (state) => state.people
);

export const selectChartData = createSelector(
  selectDashboardState,
  (state) => state.chartData
);

export const selectDashboardLoading = createSelector(
  selectDashboardState,
  (state) => state.loading
);

export const selectDashboardError = createSelector(
  selectDashboardState,
  (state) => state.error
);
