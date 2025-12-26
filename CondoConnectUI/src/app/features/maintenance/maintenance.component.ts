import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, ButtonModule],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent {
  public requests = [
    { issue: 'Leaking Faucet', unit: 'Unit 101', priority: 'High', status: 'Pending' },
    { issue: 'AC Maintenance', unit: 'Unit 402', priority: 'Medium', status: 'In Progress' },
    { issue: 'Light Bulb Replacement', unit: 'Common Area', priority: 'Low', status: 'Completed' }
  ];

  public getPrioritySev(priority: string): 'danger' | 'warn' | 'info' | 'success' | 'secondary' | undefined {
    switch (priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warn';
      case 'Low': return 'info';
      default: return 'secondary';
    }
  }
}