import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from '../../../core/services/base-api.service';
import { MaintenanceRequest, Report, Violation, Payment, TodayBooking, PendingApproval, Person, ChartData } from '../models/dashboard.model';
import { MAINTENANCE_REQUESTS, REPORTS, VIOLATIONS, PAYMENTS, TODAY_BOOKINGS, PENDING_APPROVALS, PEOPLE, CHART_DATA } from '../models/dashboard.data';
import { Observable, of } from 'rxjs';

// This service will act as a facade for aggregated data for the dashboard
// In a real application, these would come from various microservices
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor() { }

  public getMaintenanceRequests(): Observable<MaintenanceRequest[]> {
    return of(MAINTENANCE_REQUESTS);
  }

  public getReports(): Observable<Report[]> {
    return of(REPORTS);
  }

  public getViolations(): Observable<Violation[]> {
    return of(VIOLATIONS);
  }

  public getPayments(): Observable<Payment[]> {
    return of(PAYMENTS);
  }

  public getTodayBookings(): Observable<TodayBooking[]> {
    return of(TODAY_BOOKINGS);
  }

  public getPendingApprovals(): Observable<PendingApproval[]> {
    return of(PENDING_APPROVALS);
  }

  public getPeople(): Observable<Person[]> {
    return of(PEOPLE);
  }

  public getChartData(): Observable<ChartData> {
    return of(CHART_DATA);
  }
}