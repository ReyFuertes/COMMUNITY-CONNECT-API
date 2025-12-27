import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingsState } from './settings.reducer';

export const selectSettingsState = createFeatureSelector<SettingsState>('settings');

export const selectAppSettings = createSelector(
  selectSettingsState,
  (state) => state.settings
);

export const selectSettingsLoading = createSelector(
  selectSettingsState,
  (state) => state.loading
);

export const selectSettingsError = createSelector(
  selectSettingsState,
  (state) => state.error
);
