import { createReducer, on } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';
import { MaintenanceRequest, Report, Violation, Payment, TodayBooking, PendingApproval, Person, ChartData } from '../models/dashboard.model';

export interface DashboardState {
  maintenanceRequests: MaintenanceRequest[];
  reports: Report[];
  violations: Violation[];
  payments: Payment[];
  todayBookings: TodayBooking[];
  pendingApprovals: PendingApproval[];
  people: Person[];
  chartData: ChartData | null;
  loading: boolean;
  error: any;
}

export const initialState: DashboardState = {
  maintenanceRequests: [],
  reports: [],
  violations: [],
  payments: [],
  todayBookings: [],
  pendingApprovals: [],
  people: [],
  chartData: null,
  loading: false,
  error: null,
};

export const dashboardReducer = createReducer(
  initialState,

  on(DashboardActions.loadDashboardData, (state) => ({ ...state, loading: true, error: null })),

  on(DashboardActions.loadMaintenanceRequestsSuccess, (state, { maintenanceRequests }) => ({ ...state, maintenanceRequests })),
  on(DashboardActions.loadMaintenanceRequestsFailure, (state, { error }) => ({ ...state, error })),

  on(DashboardActions.loadReportsSuccess, (state, { reports }) => ({ ...state, reports })),
  on(DashboardActions.loadReportsFailure, (state, { error }) => ({ ...state, error })),

  on(DashboardActions.loadViolationsSuccess, (state, { violations }) => ({ ...state, violations })),
  on(DashboardActions.loadViolationsFailure, (state, { error }) => ({ ...state, error })),

  on(DashboardActions.loadPaymentsSuccess, (state, { payments }) => ({ ...state, payments })),
  on(DashboardActions.loadPaymentsFailure, (state, { error }) => ({ ...state, error })),

  on(DashboardActions.loadTodayBookingsSuccess, (state, { todayBookings }) => ({ ...state, todayBookings })),
  on(DashboardActions.loadTodayBookingsFailure, (state, { error }) => ({ ...state, error })),

  on(DashboardActions.loadPendingApprovalsSuccess, (state, { pendingApprovals }) => ({ ...state, pendingApprovals })),
  on(DashboardActions.loadPendingApprovalsFailure, (state, { error }) => ({ ...state, error })),

  on(DashboardActions.loadPeopleSuccess, (state, { people }) => ({ ...state, people })),
  on(DashboardActions.loadPeopleFailure, (state, { error }) => ({ ...state, error })),

  on(DashboardActions.loadChartDataSuccess, (state, { chartData }) => ({ ...state, chartData, loading: false })),
  on(DashboardActions.loadChartDataFailure, (state, { error }) => ({ ...state, error, loading: false }))
);