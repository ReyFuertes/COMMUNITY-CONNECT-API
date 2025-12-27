import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DashboardActions from '../store/dashboard.actions';
import * as DashboardSelectors from '../store/dashboard.selectors';
import { Observable } from 'rxjs';
import { MaintenanceRequest, Report, Violation, Payment, TodayBooking, PendingApproval, Person, ChartData } from '../models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: false
})
export class DashboardComponent implements OnInit {
  public maintenanceRequests$: Observable<MaintenanceRequest[]>;
  public reports$: Observable<Report[]>;
  public violations$: Observable<Violation[]>;
  public payments$: Observable<Payment[]>;
  public todayBookings$: Observable<TodayBooking[]>;
  public pendingApprovals$: Observable<PendingApproval[]>;
  public people$: Observable<Person[]>;
  public chartData$: Observable<ChartData | null>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(private store: Store) {
    this.maintenanceRequests$ = this.store.select(DashboardSelectors.selectMaintenanceRequests);
    this.reports$ = this.store.select(DashboardSelectors.selectReports);
    this.violations$ = this.store.select(DashboardSelectors.selectViolations);
    this.payments$ = this.store.select(DashboardSelectors.selectPayments);
    this.todayBookings$ = this.store.select(DashboardSelectors.selectTodayBookings);
    this.pendingApprovals$ = this.store.select(DashboardSelectors.selectPendingApprovals);
    this.people$ = this.store.select(DashboardSelectors.selectPeople);
    this.chartData$ = this.store.select(DashboardSelectors.selectChartData);
    this.loading$ = this.store.select(DashboardSelectors.selectDashboardLoading);
    this.error$ = this.store.select(DashboardSelectors.selectDashboardError);
  }

  public ngOnInit(): void {
    this.store.dispatch(DashboardActions.loadDashboardData());
  }

  public getSeverity(status: string): "success" | "info" | "warn" | "danger" | "secondary" | "contrast" | undefined {
    switch (status) {
      case 'High': return 'danger';
      case 'Medium': return 'warn';
      case 'Low': return 'info';
      case 'Active': return 'danger';
      case 'Pending': return 'warn';
      case 'Resolved': return 'success';
      case 'Investigating': return 'info';
      case 'Paid': return 'success';
      case 'Unpaid': return 'warn';
      case 'Overdue': return 'danger';
      default: return 'info';
    }
  }
}
