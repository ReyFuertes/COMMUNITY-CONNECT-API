import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {
  public docs = [
    { name: 'Community_Guidelines_2025.pdf', category: 'Policy', size: '1.2 MB', date: '2025-01-01' },
    { name: 'Meeting_Minutes_Dec.pdf', category: 'Meeting', size: '450 KB', date: '2025-12-15' }
  ];
}