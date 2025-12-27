import { createReducer, on } from '@ngrx/store';
import * as ReportsActions from './reports.actions';
import { ReportType, MaintenanceReportData, FinanceReportData } from '../models/reports.model';

export interface ReportsState {
  reportTypes: ReportType[];
  maintenanceReports: MaintenanceReportData[];
  financeReports: FinanceReportData[];
  loading: boolean;
  error: any;
}

export const initialState: ReportsState = {
  reportTypes: [],
  maintenanceReports: [],
  financeReports: [],
  loading: false,
  error: null,
};

export const reportsReducer = createReducer(
  initialState,

  on(ReportsActions.loadReportTypes, (state) => ({ ...state, loading: true, error: null })),
  on(ReportsActions.loadReportTypesSuccess, (state, { reportTypes }) => ({ ...state, reportTypes, loading: false })),
  on(ReportsActions.loadReportTypesFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(ReportsActions.loadMaintenanceReports, (state) => ({ ...state, loading: true, error: null })),
  on(ReportsActions.loadMaintenanceReportsSuccess, (state, { maintenanceReports }) => ({ ...state, maintenanceReports, loading: false })),
  on(ReportsActions.loadMaintenanceReportsFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(ReportsActions.loadFinanceReports, (state) => ({ ...state, loading: true, error: null })),
  on(ReportsActions.loadFinanceReportsSuccess, (state, { financeReports }) => ({ ...state, financeReports, loading: false })),
  on(ReportsActions.loadFinanceReportsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
