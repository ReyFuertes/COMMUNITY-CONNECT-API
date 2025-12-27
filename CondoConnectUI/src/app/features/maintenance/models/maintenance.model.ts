export interface MaintenanceRequest {
  issue: string;
  unit: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'In Progress' | 'Completed';
}