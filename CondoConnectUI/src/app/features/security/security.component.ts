import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, ButtonModule],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
  public logs = [
    { name: 'James Wilson', plate: 'ABC-1234', unit: 'Unit 101', time: '10:30 AM', status: 'Inside' },
    { name: 'Delivery: FedEx', plate: 'FED-998', unit: 'Unit 402', time: '09:15 AM', status: 'Exited' }
  ];
}