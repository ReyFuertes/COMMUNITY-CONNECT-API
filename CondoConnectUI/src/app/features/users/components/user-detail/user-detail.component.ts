import { Component, OnInit, Signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { User, UserRole } from '../../models/user.model';
import { filter, switchMap } from 'rxjs/operators';
import { selectUserError, selectUserLoading } from '../../store/user.selectors';
import { loadUsers, selectUserById } from '../../store/user.actions';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
  standalone: false
})
export class UserDetailComponent implements OnInit {
  // public user$: Signal<User | undefined>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;
  public UserRole: typeof UserRole = UserRole;

  // Mock Data for UI Design
  public activityLog: { status: string, date: string, icon: string, color: string }[] = [
    { status: 'Gate Entry', date: '15/10/2025 10:30', icon: 'pi pi-arrow-right', color: '#9C27B0' },
    { status: 'Payment Received', date: '15/10/2025 14:00', icon: 'pi pi-wallet', color: '#673AB7' },
    { status: 'Login from New IP', date: '16/10/2025 16:15', icon: 'pi pi-globe', color: '#FF9800' }
  ];

  constructor(private route: ActivatedRoute, private store: Store) {
  //   this.user$ = toSignal(this.route.paramMap.pipe(
  //   filter(params => params.has('id')),
  //   switchMap(params => this.store.select(selectUserById({ id: params.get('id') || '' })))
  // ), { initialValue: undefined })
    this.loading$ = this.store.select(selectUserLoading);
    this.error$ = this.store.select(selectUserError);
  }

  public ngOnInit(): void {
    // Optionally load users if not already loaded, depending on app flow
    this.store.dispatch(loadUsers());
  }

  public getRoleName(role: UserRole): string {
    return UserRole[role];
  }

  public updateUser(): void {
    // Dispatch update action
  }
}
