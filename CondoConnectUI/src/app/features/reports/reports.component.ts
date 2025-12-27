import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';

interface ReportType {
  label: string;
  value: string;
  code: string;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, TableModule, DatePickerModule, InputTextModule, SelectModule, TagModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {
  public reportTypes: ReportType[] = [
    { label: 'Maintenance Requests', value: 'maintenance', code: 'MAINT' },
    { label: 'Financial Statements', value: 'finance', code: 'FIN' },
    { label: 'Incident Reports', value: 'reports', code: 'INC' },
    { label: 'Violation Logs', value: 'violations', code: 'VIO' },
    { label: 'Facility Bookings', value: 'bookings', code: 'BOOK' },
    { label: 'Document Uploads', value: 'documents', code: 'DOC' }
  ];

  public selectedReportType: ReportType = this.reportTypes[0];
  public dateRange: Date[] | undefined;
  public filterUnit: string = '';
  
  // Mock Data Sources
  public maintenanceData = [
    { id: 'M-101', unit: '402', issue: 'Leaking Pipe', status: 'High', date: 'Oct 24, 2025', assignedTo: 'Plumbing Co.' },
    { id: 'M-102', unit: '105', issue: 'AC Malfunction', status: 'Medium', date: 'Oct 23, 2025', assignedTo: 'Internal Maintenance' },
    { id: 'M-105', unit: 'Common', issue: 'Elevator Noise', status: 'Low', date: 'Oct 15, 2025', assignedTo: 'Otis Elevators' },
  ];

  public financeData = [
    { id: 'P-101', unit: '101', resident: 'Rey Fuertes', amount: '$1,200', date: 'Oct 01, 2025', status: 'Paid', type: 'Rent' },
    { id: 'P-102', unit: '305', resident: 'John Doe', amount: '$1,200', date: 'Oct 05, 2025', status: 'Unpaid', type: 'Rent' },
    { id: 'P-104', unit: '205', resident: 'Sarah Connor', amount: '$150', date: 'Oct 10, 2025', status: 'Overdue', type: 'Utility' }
  ];

  public currentData: any[] = [];
  public cols: any[] = [];

  public ngOnInit(): void {
    this.updateTableConfig();
  }

  public onReportTypeChange(): void {
    this.updateTableConfig();
  }

  private updateTableConfig(): void {
    switch (this.selectedReportType.value) {
      case 'maintenance':
        this.currentData = this.maintenanceData;
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
        this.currentData = this.financeData;
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
      // Add other cases as needed with mock data
      default:
        this.currentData = [];
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
    // Logic for PDF generation
  }

  public exportExcel(): void {
    console.log('Exporting Excel for', this.selectedReportType.label);
    // Logic for Excel generation
  }

  public sendEmail(): void {
    console.log('Sending Email report...');
    // Logic for Email modal
  }
}
