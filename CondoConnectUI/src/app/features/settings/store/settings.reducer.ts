import { createReducer, on } from '@ngrx/store';
import * as SettingsActions from './settings.actions';
import { AppSettings } from '../models/settings.model';

export interface SettingsState {
  settings: AppSettings | null;
  loading: boolean;
  error: any;
}

export const initialState: SettingsState = {
  settings: null,
  loading: false,
  error: null,
};

export const settingsReducer = createReducer(
  initialState,

  on(SettingsActions.loadAppSettings, (state) => ({ ...state, loading: true, error: null })),
  on(SettingsActions.loadAppSettingsSuccess, (state, { settings }) => ({ ...state, settings, loading: false })),
  on(SettingsActions.loadAppSettingsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
