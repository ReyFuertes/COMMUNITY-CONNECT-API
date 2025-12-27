import { createReducer, on } from '@ngrx/store';
import * as MaintenanceActions from './maintenance.actions';
import { MaintenanceRequest } from '../models/maintenance.model';

export interface MaintenanceState {
  requests: MaintenanceRequest[];
  loading: boolean;
  error: any;
}

export const initialState: MaintenanceState = {
  requests: [],
  loading: false,
  error: null,
};

export const maintenanceReducer = createReducer(
  initialState,

  on(MaintenanceActions.loadMaintenanceRequests, (state) => ({ ...state, loading: true, error: null })),
  on(MaintenanceActions.loadMaintenanceRequestsSuccess, (state, { requests }) => ({ ...state, requests, loading: false })),
  on(MaintenanceActions.loadMaintenanceRequestsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
