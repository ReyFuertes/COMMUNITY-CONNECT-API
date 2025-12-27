import { createAction, props } from '@ngrx/store';
import { MaintenanceRequest } from '../models/maintenance.model';

export const loadMaintenanceRequests = createAction('[Maintenance Page] Load Maintenance Requests');

export const loadMaintenanceRequestsSuccess = createAction(
  '[Maintenance API] Load Maintenance Requests Success',
  props<{ requests: MaintenanceRequest[] }>()
);

export const loadMaintenanceRequestsFailure = createAction(
  '[Maintenance API] Load Maintenance Requests Failure',
  props<{ error: any }>()
);
