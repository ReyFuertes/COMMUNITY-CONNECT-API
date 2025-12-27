import { MaintenanceRequest } from './maintenance.model';

export const MAINTENANCE_REQUESTS: MaintenanceRequest[] = [
  { issue: 'Leaking Faucet', unit: 'Unit 101', priority: 'High', status: 'Pending' },
  { issue: 'AC Maintenance', unit: 'Unit 402', priority: 'Medium', status: 'In Progress' },
  { issue: 'Light Bulb Replacement', unit: 'Common Area', priority: 'Low', status: 'Completed' }
];