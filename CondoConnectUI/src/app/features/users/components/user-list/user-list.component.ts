import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../../store/user.actions';
import * as UserSelectors from '../../store/user.selectors';
import { UserRole } from '../../models/user.model';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  standalone: false
})
export class UserListComponent implements OnInit {
  public users$: Observable<User[]>;
  public loading$: Observable<boolean>;
  public UserRole: typeof UserRole = UserRole;
  public pageSize: number = 20;

  constructor(private store: Store) {
    this.users$ = this.store.select(UserSelectors.selectAllUsers);
    this.loading$ = this.store.select(UserSelectors.selectUserLoading);
  }

  public ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
  }

  public delete(id: string): void {
    if(confirm('Are you sure you want to delete this user?')) {
        this.store.dispatch(UserActions.deleteUser({ id }));
    }
  }
  
  public getRoleName(role: UserRole): string {
      return UserRole[role];
  }
}