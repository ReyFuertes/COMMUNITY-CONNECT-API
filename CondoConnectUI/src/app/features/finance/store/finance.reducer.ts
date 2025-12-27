import { createReducer, on } from '@ngrx/store';
import * as FinanceActions from './finance.actions';
import { Payment } from '../models/finance.model';

export interface FinanceState {
  payments: Payment[];
  loading: boolean;
  error: any;
}

export const initialState: FinanceState = {
  payments: [],
  loading: false,
  error: null,
};

export const financeReducer = createReducer(
  initialState,

  on(FinanceActions.loadPayments, (state) => ({ ...state, loading: true, error: null })),
  on(FinanceActions.loadPaymentsSuccess, (state, { payments }) => ({ ...state, payments, loading: false })),
  on(FinanceActions.loadPaymentsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
