import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { loadUsers, deleteUser } from '../../state/user.actions';
import { selectAllUsers, selectUserLoading } from '../../state/user.selectors';
import { UserRole } from '../../models/user.model';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, AvatarModule, RouterLink, InputTextModule, SelectModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  private store: Store = inject(Store);
  
  public users$: Observable<User[]> = this.store.select(selectAllUsers);
  public loading$: Observable<boolean> = this.store.select(selectUserLoading);
  public UserRole: typeof UserRole = UserRole;
  public pageSize: number = 20;

  public ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  public delete(id: string): void {
    if(confirm('Are you sure you want to delete this user?')) {
        this.store.dispatch(deleteUser({ id }));
    }
  }
  
  public getRoleName(role: number): string {
      return UserRole[role];
  }
}