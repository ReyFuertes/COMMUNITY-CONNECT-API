export interface SecurityLog {
  name: string;
  plate: string;
  unit: string;
  time: string;
  status: 'Inside' | 'Exited';
}