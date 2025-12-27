import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BaseApiService } from '../../../core/services/base-api.service';
import { ReportType, MaintenanceReportData, FinanceReportData } from '../models/reports.model';
import { REPORT_TYPES, MAINTENANCE_REPORT_DATA, FINANCE_REPORT_DATA } from '../models/reports.data';

@Injectable({
  providedIn: 'root'
})
export class ReportsService extends BaseApiService<any> { // Using 'any' as it's a generic reports service
  protected override resourcePath: string = 'reports'; // Base path, actual path depends on report type

  constructor(protected override http: HttpClient) {
    super(http);
  }

  public getReportTypes(): Observable<ReportType[]> {
    return of(REPORT_TYPES);
  }

  public getMaintenanceReports(): Observable<MaintenanceReportData[]> {
    return of(MAINTENANCE_REPORT_DATA);
  }

  public getFinanceReports(): Observable<FinanceReportData[]> {
    return of(FINANCE_REPORT_DATA);
  }
}