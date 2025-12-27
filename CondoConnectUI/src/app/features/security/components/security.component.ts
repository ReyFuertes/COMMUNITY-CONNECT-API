import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SecurityActions from '../store/security.actions';
import * as SecuritySelectors from '../store/security.selectors';
import { Observable } from 'rxjs';
import { SecurityLog } from '../models/security.model';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss',
  standalone: false
})
export class SecurityComponent implements OnInit {
  public logs$: Observable<SecurityLog[]>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(private store: Store) {
    this.logs$ = this.store.select(SecuritySelectors.selectAllSecurityLogs);
    this.loading$ = this.store.select(SecuritySelectors.selectSecurityLoading);
    this.error$ = this.store.select(SecuritySelectors.selectSecurityError);
  }

  public ngOnInit(): void {
    this.store.dispatch(SecurityActions.loadSecurityLogs());
  }
}