import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as MaintenanceActions from '../store/maintenance.actions';
import * as MaintenanceSelectors from '../store/maintenance.selectors';
import { Observable } from 'rxjs';
import { MaintenanceRequest } from '../models/maintenance.model';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss',
  standalone: false
})
export class MaintenanceComponent implements OnInit {
  public requests$: Observable<MaintenanceRequest[]>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(private store: Store) {
    this.requests$ = this.store.select(MaintenanceSelectors.selectAllMaintenanceRequests);
    this.loading$ = this.store.select(MaintenanceSelectors.selectMaintenanceLoading);
    this.error$ = this.store.select(MaintenanceSelectors.selectMaintenanceError);
  }

  public ngOnInit(): void {
    this.store.dispatch(MaintenanceActions.loadMaintenanceRequests());
  }

  public getPrioritySev(priority: string): 'danger' | 'warn' | 'info' | 'success' | 'secondary' | undefined {
    switch (priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warn';
      case 'Low': return 'info';
      default: return 'secondary';
    }
  }
}