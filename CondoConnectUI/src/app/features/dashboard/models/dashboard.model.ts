export interface MaintenanceRequest {
  id: string;
  unit: string;
  issue: string;
  status: string;
  date: string;
  assignedTo?: string;
}

export interface Report {
  id: string;
  type: string;
  reporter: string;
  status: string;
}

export interface Violation {
  id: string;
  unit: string;
  type: string;
  fine: string;
  status: string;
}

export interface Payment {
  id: string;
  unit: string;
  resident: string;
  amount: string;
  date: string;
  status: string;
}

export interface TodayBooking {
  event: string;
  time: string;
  user: string;
}

export interface PendingApproval {
  id: number;
  type: string;
  detail: string;
  icon: string;
  color: string;
}

export interface Person {
  name: string;
  initials: string;
  color: string;
  image?: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    backgroundColor: string;
    tension: number;
  }[];
}