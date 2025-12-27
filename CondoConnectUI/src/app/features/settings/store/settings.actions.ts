import { createAction, props } from '@ngrx/store';
import { AppSettings } from '../models/settings.model';

export const loadAppSettings = createAction('[Settings Page] Load App Settings');

export const loadAppSettingsSuccess = createAction(
  '[Settings API] Load App Settings Success',
  props<{ settings: AppSettings }>()
);

export const loadAppSettingsFailure = createAction(
  '[Settings API] Load App Settings Failure',
  props<{ error: any }>()
);
