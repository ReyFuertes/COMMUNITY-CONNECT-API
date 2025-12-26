import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, ButtonModule],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss'
})
export class FinanceComponent {
  public payments = [
    { resident: 'John Doe', type: 'Assoc. Dues', amount: 'R5,000', status: 'Paid' },
    { resident: 'Catherine Bosse', type: 'Utility: Water', amount: 'R1,200', status: 'Pending' }
  ];
}