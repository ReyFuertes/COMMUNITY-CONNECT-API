import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as SecurityActions from './security.actions';
import { SecurityService } from '../services/security.service';

@Injectable()
export class SecurityEffects {
  private actions$ = inject(Actions);
  private securityService = inject(SecurityService);

  loadSecurityLogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SecurityActions.loadSecurityLogs),
      mergeMap(() =>
        this.securityService.getAll().pipe(
          map((logs) => SecurityActions.loadSecurityLogsSuccess({ logs })),
          catchError((error) => of(SecurityActions.loadSecurityLogsFailure({ error })))
        )
      )
    )
  );
}
