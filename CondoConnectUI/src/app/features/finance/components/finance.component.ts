import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FinanceActions from '../store/finance.actions';
import * as FinanceSelectors from '../store/finance.selectors';
import { Observable } from 'rxjs';
import { Payment } from '../models/finance.model';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss',
  standalone: false
})
export class FinanceComponent implements OnInit {
  public payments$: Observable<Payment[]>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(private store: Store) {
    this.payments$ = this.store.select(FinanceSelectors.selectAllPayments);
    this.loading$ = this.store.select(FinanceSelectors.selectFinanceLoading);
    this.error$ = this.store.select(FinanceSelectors.selectFinanceError);
  }

  public ngOnInit(): void {
    this.store.dispatch(FinanceActions.loadPayments());
  }

  public getSeverity(status: string): 'success' | 'warn' | 'danger' | 'secondary' | undefined {
    switch (status) {
      case 'Paid': return 'success';
      case 'Pending': return 'warn';
      case 'Overdue': return 'danger';
      default: return 'secondary';
    }
  }
}