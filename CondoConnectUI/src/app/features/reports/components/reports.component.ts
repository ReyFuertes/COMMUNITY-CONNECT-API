import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ReportsActions from '../store/reports.actions';
import * as ReportsSelectors from '../store/reports.selectors';
import { Observable } from 'rxjs';
import { ReportType, ReportColumn, MaintenanceReportData, FinanceReportData } from '../models/reports.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
  standalone: false
})
export class ReportsComponent implements OnInit {
  public reportTypes$: Observable<ReportType[]>;
  public selectedReportType: ReportType;
  public dateRange: Date[] | undefined;
  public filterUnit: string = '';
  
  public currentData: (MaintenanceReportData | FinanceReportData)[] = [];
  public cols: ReportColumn[] = [];

  constructor(private store: Store) {
    this.reportTypes$ = this.store.select(ReportsSelectors.selectReportTypes);
    this.selectedReportType = { label: 'Maintenance Requests', value: 'maintenance', code: 'MAINT' }; // Default value

    this.store.select(ReportsSelectors.selectMaintenanceReports).subscribe(data => {
      if (this.selectedReportType.value === 'maintenance') {
        this.currentData = data;
        this.updateColumns();
      }
    });

    this.store.select(ReportsSelectors.selectFinanceReports).subscribe(data => {
      if (this.selectedReportType.value === 'finance') {
        this.currentData = data;
        this.updateColumns();
      }
    });
  }

  public ngOnInit(): void {
    this.store.dispatch(ReportsActions.loadReportTypes());
    this.store.dispatch(ReportsActions.loadMaintenanceReports());
    this.store.dispatch(ReportsActions.loadFinanceReports());
  }

  public onReportTypeChange(): void {
    this.updateColumns();
    // Dispatch action to load specific report data if not already loaded
    switch (this.selectedReportType.value) {
      case 'maintenance':
        this.store.dispatch(ReportsActions.loadMaintenanceReports());
        break;
      case 'finance':
        this.store.dispatch(ReportsActions.loadFinanceReports());
        break;
      // Add other cases
    }
  }

  private updateColumns(): void {
    switch (this.selectedReportType.value) {
      case 'maintenance':
        this.cols = [
          { field: 'id', header: 'ID' },
          { field: 'unit', header: 'Unit' },
          { field: 'issue', header: 'Issue' },
          { field: 'assignedTo', header: 'Assigned To' },
          { field: 'date', header: 'Date' },
          { field: 'status', header: 'Status' }
        ];
        break;
      case 'finance':
        this.cols = [
          { field: 'id', header: 'Transaction ID' },
          { field: 'unit', header: 'Unit' },
          { field: 'resident', header: 'Resident' },
          { field: 'type', header: 'Type' },
          { field: 'amount', header: 'Amount' },
          { field: 'date', header: 'Due Date' },
          { field: 'status', header: 'Status' }
        ];
        break;
      default:
        this.cols = [];
    }
  }

  public getSeverity(status: string): "success" | "info" | "warn" | "danger" | "secondary" | "contrast" | undefined {
    switch (status) {
      case 'High': case 'Overdue': case 'Unpaid': return 'danger';
      case 'Medium': case 'Pending': return 'warn';
      case 'Low': case 'Paid': case 'Resolved': return 'success';
      default: return 'info';
    }
  }

  public exportPdf(): void {
    console.log('Exporting PDF for', this.selectedReportType.label);
  }

  public exportExcel(): void {
    console.log('Exporting Excel for', this.selectedReportType.label);
  }

  public sendEmail(): void {
    console.log('Sending Email report...');
  }
}
