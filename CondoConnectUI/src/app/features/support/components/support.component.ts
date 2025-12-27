import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  standalone: false,
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent {
  public faqItems = [
    { question: 'How do I pay my association dues?', answer: 'You can pay through the Finance section using Stripe or Xendit.' },
    { question: 'How do I book the swimming pool?', answer: 'Use the Bookings section to select a date and time slot.' },
    { question: 'What do I do if I lost my keycard?', answer: 'Please contact security or visit the property management office.' }
  ];
}
