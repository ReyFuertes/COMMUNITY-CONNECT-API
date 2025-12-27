import { createAction, props } from '@ngrx/store';
import { Payment } from '../models/finance.model';

export const loadPayments = createAction('[Finance Page] Load Payments');

export const loadPaymentsSuccess = createAction(
  '[Finance API] Load Payments Success',
  props<{ payments: Payment[] }>()
);

export const loadPaymentsFailure = createAction(
  '[Finance API] Load Payments Failure',
  props<{ error: any }>()
);
