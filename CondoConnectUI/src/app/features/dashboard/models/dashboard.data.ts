import { MaintenanceRequest, Report, Violation, Payment, TodayBooking, PendingApproval, Person, ChartData } from './dashboard.model';

export const MAINTENANCE_REQUESTS: MaintenanceRequest[] = [
  { id: 'M-101', unit: '402', issue: 'Leaking Pipe', status: 'High', date: 'Oct 24' },
  { id: 'M-102', unit: '105', issue: 'AC Malfunction', status: 'Medium', date: 'Oct 23' },
  { id: 'M-103', unit: 'Lobby', issue: 'Light Replacement', status: 'Low', date: 'Oct 22' },
  { id: 'M-104', unit: 'Gym', issue: 'Treadmill Service', status: 'Medium', date: 'Oct 20' }
];

export const REPORTS: Report[] = [
  { id: 'R-201', type: 'Noise Complaint', reporter: 'Unit 301', status: 'Pending' },
  { id: 'R-202', type: 'Illegal Parking', reporter: 'Security', status: 'Investigating' },
  { id: 'R-203', type: 'Pet Waste', reporter: 'Unit 102', status: 'Resolved' }
];

export const VIOLATIONS: Violation[] = [
  { id: 'V-301', unit: '505', type: 'Unattended Guests', fine: '$50', status: 'Active' },
  { id: 'V-302', unit: '202', type: 'Balcony Storage', fine: 'Warning', status: 'Active' }
];

export const PAYMENTS: Payment[] = [
  { id: 'P-101', unit: '101', resident: 'Rey Fuertes', amount: '$1,200', date: 'Oct 01', status: 'Paid' },
  { id: 'P-102', unit: '305', resident: 'John Doe', amount: '$1,200', date: 'Oct 05', status: 'Unpaid' },
  { id: 'P-103', unit: '402', resident: 'Michael Aylward', amount: '$1,500', date: 'Oct 01', status: 'Paid' },
  { id: 'P-104', unit: '205', resident: 'Sarah Connor', amount: '$1,100', date: 'Oct 10', status: 'Overdue' },
  { id: 'P-105', unit: '501', resident: 'Alice Smith', amount: '$1,300', date: 'Oct 03', status: 'Paid' }
];

export const TODAY_BOOKINGS: TodayBooking[] = [
  { event: 'Clubhouse', time: '10:00 AM', user: 'Unit 101' },
  { event: 'Tennis Court', time: '02:00 PM', user: 'Unit 305' },
  { event: 'BBQ Area', time: '06:00 PM', user: 'Unit 402' }
];

export const PENDING_APPROVALS: PendingApproval[] = [
  { id: 1, type: 'Tenant Registration', detail: 'John Smith (Unit 204)', icon: 'pi pi-user-plus', color: '#4A90E2' },
  { id: 2, type: 'Document Upload', detail: 'Lease Agreement (Unit 501)', icon: 'pi pi-file', color: '#50C878' },
  { id: 3, type: 'Document Upload', detail: 'Insurance Policy (Unit 102)', icon: 'pi pi-shield', color: '#FF8C00' },
  { id: 4, type: 'Tenant Registration', detail: 'Sarah Connor (Unit 303)', icon: 'pi pi-user-plus', color: '#4A90E2' }
];

export const PEOPLE: Person[] = [
  { name: 'Rey Fuertes', initials: 'RF', color: '#4A90E2' },
  { name: 'Catherine Bosse', initials: 'CB', color: '#50C878', image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png' },
  { name: 'John Doe', initials: 'JD', color: '#FF8C00' },
  { name: 'Alice Smith', initials: 'AS', color: '#EF4444' },
  { name: 'Michael Aylward', initials: 'MA', color: '#50C878', image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png' },
  { name: 'Helena Lombard', initials: 'HL', color: '#9B59B6' }
];

export const CHART_DATA: ChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Occupancy Rate',
      data: [82, 85, 84, 88, 90, 92, 94],
      fill: true,
      borderColor: '#198754',
      backgroundColor: 'rgba(25, 135, 84, 0.1)',
      tension: 0.4
    }
  ]
};