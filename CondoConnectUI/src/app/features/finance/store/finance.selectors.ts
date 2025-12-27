import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FinanceState } from './finance.reducer';

export const selectFinanceState = createFeatureSelector<FinanceState>('finance');

export const selectAllPayments = createSelector(
  selectFinanceState,
  (state) => state.payments
);

export const selectFinanceLoading = createSelector(
  selectFinanceState,
  (state) => state.loading
);

export const selectFinanceError = createSelector(
  selectFinanceState,
  (state) => state.error
);
