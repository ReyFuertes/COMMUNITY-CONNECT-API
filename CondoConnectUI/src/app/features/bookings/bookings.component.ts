import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, ButtonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent {
  public bookings = [
    { amenity: 'Swimming Pool', resident: 'John Doe', date: '2025-12-28', slot: '10:00 - 12:00', status: 'Confirmed' },
    { amenity: 'Clubhouse', resident: 'Catherine Bosse', date: '2025-12-30', slot: '18:00 - 22:00', status: 'Pending' }
  ];
}