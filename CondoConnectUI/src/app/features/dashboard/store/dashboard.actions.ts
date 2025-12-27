import { createAction, props } from '@ngrx/store';
import { MaintenanceRequest, Report, Violation, Payment, TodayBooking, PendingApproval, Person, ChartData } from '../models/dashboard.model';

// Load Dashboard Data
export const loadDashboardData = createAction('[Dashboard Page] Load Dashboard Data');

export const loadMaintenanceRequestsSuccess = createAction(
  '[Dashboard API] Load Maintenance Requests Success',
  props<{ maintenanceRequests: MaintenanceRequest[] }>()
);
export const loadMaintenanceRequestsFailure = createAction(
  '[Dashboard API] Load Maintenance Requests Failure',
  props<{ error: any }>()
);

export const loadReportsSuccess = createAction(
  '[Dashboard API] Load Reports Success',
  props<{ reports: Report[] }>()
);
export const loadReportsFailure = createAction(
  '[Dashboard API] Load Reports Failure',
  props<{ error: any }>()
);

export const loadViolationsSuccess = createAction(
  '[Dashboard API] Load Violations Success',
  props<{ violations: Violation[] }>()
);
export const loadViolationsFailure = createAction(
  '[Dashboard API] Load Violations Failure',
  props<{ error: any }>()
);

export const loadPaymentsSuccess = createAction(
  '[Dashboard API] Load Payments Success',
  props<{ payments: Payment[] }>()
);
export const loadPaymentsFailure = createAction(
  '[Dashboard API] Load Payments Failure',
  props<{ error: any }>()
);

export const loadTodayBookingsSuccess = createAction(
  '[Dashboard API] Load Today Bookings Success',
  props<{ todayBookings: TodayBooking[] }>()
);
export const loadTodayBookingsFailure = createAction(
  '[Dashboard API] Load Today Bookings Failure',
  props<{ error: any }>()
);

export const loadPendingApprovalsSuccess = createAction(
  '[Dashboard API] Load Pending Approvals Success',
  props<{ pendingApprovals: PendingApproval[] }>()
);
export const loadPendingApprovalsFailure = createAction(
  '[Dashboard API] Load Pending Approvals Failure',
  props<{ error: any }>()
);

export const loadPeopleSuccess = createAction(
  '[Dashboard API] Load People Success',
  props<{ people: Person[] }>()
);
export const loadPeopleFailure = createAction(
  '[Dashboard API] Load People Failure',
  props<{ error: any }>()
);

export const loadChartDataSuccess = createAction(
  '[Dashboard API] Load Chart Data Success',
  props<{ chartData: ChartData }>()
);
export const loadChartDataFailure = createAction(
  '[Dashboard API] Load Chart Data Failure',
  props<{ error: any }>()
);
