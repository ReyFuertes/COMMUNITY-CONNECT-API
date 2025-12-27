import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as MaintenanceActions from './maintenance.actions';
import { MaintenanceService } from '../services/maintenance.service';

@Injectable()
export class MaintenanceEffects {
  private actions$ = inject(Actions);
  private maintenanceService = inject(MaintenanceService);

  loadMaintenanceRequests$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MaintenanceActions.loadMaintenanceRequests),
      mergeMap(() =>
        this.maintenanceService.getAll().pipe(
          map((requests) => MaintenanceActions.loadMaintenanceRequestsSuccess({ requests })),
          catchError((error) => of(MaintenanceActions.loadMaintenanceRequestsFailure({ error })))
        )
      )
    )
  );
}
