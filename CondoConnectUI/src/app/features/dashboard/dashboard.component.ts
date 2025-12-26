import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, AvatarModule, ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  public people: { name: string, initials: string, color: string, image?: string }[] = [
    { name: 'Rey Fuertes', initials: 'RF', color: '#4A90E2' },
    { name: 'Catherine Bosse', initials: 'CB', color: '#50C878', image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png' },
    { name: 'John Doe', initials: 'JD', color: '#FF8C00' },
    { name: 'Alice Smith', initials: 'AS', color: '#EF4444' },
    { name: 'Michael Aylward', initials: 'MA', color: '#50C878', image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png' },
    { name: 'Helena Lombard', initials: 'HL', color: '#9B59B6' }
  ];

  public recentActivities: { user: string, action: string, time: string, status: string }[] = [
    { user: 'Security Guard', action: 'Guest Parking Permit Issued', time: '5 mins ago', status: 'Success' },
    { user: 'John Doe', action: 'Maintenance Request: Leaking Pipe', time: '25 mins ago', status: 'Pending' },
    { user: 'System', action: 'Automated Billing Generated', time: '1 hour ago', status: 'Success' },
    { user: 'Michael Aylward', action: 'Updated Unit 402 Lease', time: '2 hours ago', status: 'Success' },
    { user: 'Front Desk', action: 'Parcel Delivered for Unit 101', time: '3 hours ago', status: 'Info' }
  ];

  public chartData: any;
  public chartOptions: any;

  public ngOnInit(): void {
    this.initChart();
  }

  private initChart(): void {
    this.chartData = {
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

    this.chartOptions = {
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: '#f1f5f9' }, min: 0, max: 100 }
      }
    };
  }
}
