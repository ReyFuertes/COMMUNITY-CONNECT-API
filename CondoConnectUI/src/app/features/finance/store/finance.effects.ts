import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as FinanceActions from './finance.actions';
import { FinanceService } from '../services/finance.service';

@Injectable()
export class FinanceEffects {
  private actions$ = inject(Actions);
  private financeService = inject(FinanceService);

  loadPayments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FinanceActions.loadPayments),
      mergeMap(() =>
        this.financeService.getAll().pipe(
          map((payments) => FinanceActions.loadPaymentsSuccess({ payments })),
          catchError((error) => of(FinanceActions.loadPaymentsFailure({ error })))
        )
      )
    )
  );
}
