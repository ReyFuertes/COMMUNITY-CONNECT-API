import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ReportsActions from './reports.actions';
import { ReportsService } from '../services/reports.service';

@Injectable()
export class ReportsEffects {
  private actions$ = inject(Actions);
  private reportsService = inject(ReportsService);

  loadReportTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportsActions.loadReportTypes),
      mergeMap(() =>
        this.reportsService.getReportTypes().pipe(
          map((reportTypes) => ReportsActions.loadReportTypesSuccess({ reportTypes })),
          catchError((error) => of(ReportsActions.loadReportTypesFailure({ error })))
        )
      )
    )
  );

  loadMaintenanceReports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportsActions.loadMaintenanceReports),
      mergeMap(() =>
        this.reportsService.getMaintenanceReports().pipe(
          map((maintenanceReports) => ReportsActions.loadMaintenanceReportsSuccess({ maintenanceReports })),
          catchError((error) => of(ReportsActions.loadMaintenanceReportsFailure({ error })))
        )
      )
    )
  );

  loadFinanceReports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportsActions.loadFinanceReports),
      mergeMap(() =>
        this.reportsService.getFinanceReports().pipe(
          map((financeReports) => ReportsActions.loadFinanceReportsSuccess({ financeReports })),
          catchError((error) => of(ReportsActions.loadFinanceReportsFailure({ error })))
        )
      )
    )
  );
}
