import { createReducer, on } from '@ngrx/store';
import * as SecurityActions from './security.actions';
import { SecurityLog } from '../models/security.model';

export interface SecurityState {
  logs: SecurityLog[];
  loading: boolean;
  error: any;
}

export const initialState: SecurityState = {
  logs: [],
  loading: false,
  error: null,
};

export const securityReducer = createReducer(
  initialState,

  on(SecurityActions.loadSecurityLogs, (state) => ({ ...state, loading: true, error: null })),
  on(SecurityActions.loadSecurityLogsSuccess, (state, { logs }) => ({ ...state, logs, loading: false })),
  on(SecurityActions.loadSecurityLogsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
