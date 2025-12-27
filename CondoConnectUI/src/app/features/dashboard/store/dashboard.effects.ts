import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, forkJoin, from } from 'rxjs'; // Import 'from' from rxjs
import { catchError, map, mergeMap, concatMap } from 'rxjs/operators'; // Import 'concatMap'
import * as DashboardActions from './dashboard.actions';
import { DashboardService } from '../services/dashboard.service';

@Injectable()
export class DashboardEffects {
  private actions$ = inject(Actions);
  private dashboardService = inject(DashboardService);

  public loadDashboardData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadDashboardData),
      mergeMap(() =>
        forkJoin([
          this.dashboardService.getMaintenanceRequests().pipe(
            map(maintenanceRequests => DashboardActions.loadMaintenanceRequestsSuccess({ maintenanceRequests })),
            catchError(error => of(DashboardActions.loadMaintenanceRequestsFailure({ error })))
          ),
          this.dashboardService.getReports().pipe(
            map(reports => DashboardActions.loadReportsSuccess({ reports })),
            catchError(error => of(DashboardActions.loadReportsFailure({ error })))
          ),
          this.dashboardService.getViolations().pipe(
            map(violations => DashboardActions.loadViolationsSuccess({ violations })),
            catchError(error => of(DashboardActions.loadViolationsFailure({ error })))
          ),
          this.dashboardService.getPayments().pipe(
            map(payments => DashboardActions.loadPaymentsSuccess({ payments })),
            catchError(error => of(DashboardActions.loadPaymentsFailure({ error })))
          ),
          this.dashboardService.getTodayBookings().pipe(
            map(todayBookings => DashboardActions.loadTodayBookingsSuccess({ todayBookings })),
            catchError(error => of(DashboardActions.loadTodayBookingsFailure({ error })))
          ),
          this.dashboardService.getPendingApprovals().pipe(
            map(pendingApprovals => DashboardActions.loadPendingApprovalsSuccess({ pendingApprovals })),
            catchError(error => of(DashboardActions.loadPendingApprovalsFailure({ error })))
          ),
          this.dashboardService.getPeople().pipe(
            map(people => DashboardActions.loadPeopleSuccess({ people })),
            catchError(error => of(DashboardActions.loadPeopleFailure({ error })))
          ),
          this.dashboardService.getChartData().pipe(
            map(chartData => DashboardActions.loadChartDataSuccess({ chartData })),
            catchError(error => of(DashboardActions.loadChartDataFailure({ error })))
          )
        ]).pipe(
          concatMap(results => from(results))
        )
      )
    )
  );
}