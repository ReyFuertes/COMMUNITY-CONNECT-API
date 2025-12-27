import { ReportType, MaintenanceReportData, FinanceReportData } from './reports.model';

export const REPORT_TYPES: ReportType[] = [
    { label: 'Maintenance Requests', value: 'maintenance', code: 'MAINT' },
    { label: 'Financial Statements', value: 'finance', code: 'FIN' },
    { label: 'Incident Reports', value: 'reports', code: 'INC' },
    { label: 'Violation Logs', value: 'violations', code: 'VIO' },
    { label: 'Facility Bookings', value: 'bookings', code: 'BOOK' },
    { label: 'Document Uploads', value: 'documents', code: 'DOC' }
];

export const MAINTENANCE_REPORT_DATA: MaintenanceReportData[] = [
    { id: 'M-101', unit: '402', issue: 'Leaking Pipe', status: 'High', date: 'Oct 24, 2025', assignedTo: 'Plumbing Co.' },
    { id: 'M-102', unit: '105', issue: 'AC Malfunction', status: 'Medium', date: 'Oct 23, 2025', assignedTo: 'Internal Maintenance' },
    { id: 'M-105', unit: 'Common', issue: 'Elevator Noise', status: 'Low', date: 'Oct 15, 2025', assignedTo: 'Otis Elevators' },
];

export const FINANCE_REPORT_DATA: FinanceReportData[] = [
    { id: 'P-101', unit: '101', resident: 'Rey Fuertes', amount: '$1,200', date: 'Oct 01, 2025', status: 'Paid', type: 'Rent' },
    { id: 'P-102', unit: '305', resident: 'John Doe', amount: '$1,200', date: 'Oct 05, 2025', status: 'Unpaid', type: 'Rent' },
    { id: 'P-104', unit: '205', resident: 'Sarah Connor', amount: '$150', date: 'Oct 10, 2025', status: 'Overdue', type: 'Utility' }
];