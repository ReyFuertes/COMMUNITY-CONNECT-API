import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SecurityState } from './security.reducer';

export const selectSecurityState = createFeatureSelector<SecurityState>('security');

export const selectAllSecurityLogs = createSelector(
  selectSecurityState,
  (state) => state.logs
);

export const selectSecurityLoading = createSelector(
  selectSecurityState,
  (state) => state.loading
);

export const selectSecurityError = createSelector(
  selectSecurityState,
  (state) => state.error
);
