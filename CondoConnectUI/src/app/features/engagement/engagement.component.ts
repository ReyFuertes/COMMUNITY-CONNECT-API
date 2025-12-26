import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-engagement',
  standalone: true,
  imports: [CommonModule, AvatarModule, ButtonModule],
  templateUrl: './engagement.component.html',
  styleUrl: './engagement.component.scss'
})
export class EngagementComponent {
  public posts = [
    { author: 'Admin', title: 'New Year Party!', content: 'Join us at the clubhouse on Dec 31st for our annual community celebration.', date: '2 hours ago' },
    { author: 'Maintenance', title: 'Pool Cleaning', content: 'The swimming pool will be closed for scheduled maintenance this Saturday.', date: '1 day ago' }
  ];
}