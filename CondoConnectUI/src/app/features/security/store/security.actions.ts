import { createAction, props } from '@ngrx/store';
import { SecurityLog } from '../models/security.model';

export const loadSecurityLogs = createAction('[Security Page] Load Security Logs');

export const loadSecurityLogsSuccess = createAction(
  '[Security API] Load Security Logs Success',
  props<{ logs: SecurityLog[] }>()
);

export const loadSecurityLogsFailure = createAction(
  '[Security API] Load Security Logs Failure',
  props<{ error: any }>()
);
