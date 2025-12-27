export interface ReportType {
  label: string;
  value: string;
  code: string;
}

export interface MaintenanceReportData {
  id: string;
  unit: string;
  issue: string;
  status: string;
  date: string;
  assignedTo: string;
}

export interface FinanceReportData {
  id: string;
  unit: string;
  resident: string;
  amount: string;
  date: string;
  status: string;
  type: string;
}

export interface ReportColumn {
  field: string;
  header: string;
}