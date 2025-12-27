import { createAction, props } from '@ngrx/store';
import { ReportType, MaintenanceReportData, FinanceReportData } from '../models/reports.model';

// Load Report Types
export const loadReportTypes = createAction('[Reports Page] Load Report Types');
export const loadReportTypesSuccess = createAction(
  '[Reports API] Load Report Types Success',
  props<{ reportTypes: ReportType[] }>()
);
export const loadReportTypesFailure = createAction(
  '[Reports API] Load Report Types Failure',
  props<{ error: any }>()
);

// Load Maintenance Reports
export const loadMaintenanceReports = createAction('[Reports Page] Load Maintenance Reports');
export const loadMaintenanceReportsSuccess = createAction(
  '[Reports API] Load Maintenance Reports Success',
  props<{ maintenanceReports: MaintenanceReportData[] }>()
);
export const loadMaintenanceReportsFailure = createAction(
  '[Reports API] Load Maintenance Reports Failure',
  props<{ error: any }>()
);

// Load Finance Reports
export const loadFinanceReports = createAction('[Reports Page] Load Finance Reports');
export const loadFinanceReportsSuccess = createAction(
  '[Reports API] Load Finance Reports Success',
  props<{ financeReports: FinanceReportData[] }>()
);
export const loadFinanceReportsFailure = createAction(
  '[Reports API] Load Finance Reports Failure',
  props<{ error: any }>()
);