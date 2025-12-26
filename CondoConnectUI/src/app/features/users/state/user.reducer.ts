import { createReducer, on } from '@ngrx/store';
import { User, UserRole } from '../models/user.model';
import * as UserActions from './user.actions';

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  users: [
    {
      id: '1',
      firstName: 'Rey',
      lastName: 'Fuertes',
      email: 'rey.fuertes@community.com',
      role: UserRole.SuperAdmin,
      isActive: true,
      createdDate: new Date('2025-01-01'),
      optInToDirectory: true,
      showEmailInDirectory: true
    },
    {
      id: '2',
      firstName: 'Catherine',
      lastName: 'Bosse',
      email: 'catherine.b@gmail.com',
      role: UserRole.Owner,
      isActive: true,
      createdDate: new Date('2025-02-15'),
      optInToDirectory: true,
      showEmailInDirectory: false
    },
    {
      id: '3',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@tenant.com',
      role: UserRole.Tenant,
      isActive: true,
      createdDate: new Date('2025-03-10'),
      optInToDirectory: true,
      showEmailInDirectory: true
    },
    {
      id: '4',
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice.security@community.com',
      role: UserRole.SecurityGuard,
      isActive: true,
      createdDate: new Date('2025-04-05'),
      optInToDirectory: false,
      showEmailInDirectory: false
    },
    {
      id: '5',
      firstName: 'Michael',
      lastName: 'Aylward',
      email: 'm.aylward@manager.com',
      role: UserRole.PropertyManager,
      isActive: true,
      createdDate: new Date('2025-05-20'),
      optInToDirectory: true,
      showEmailInDirectory: true
    },
    {
      id: '6',
      firstName: 'Helena',
      lastName: 'Lombard',
      email: 'helena.l@outlook.com',
      role: UserRole.Owner,
      isActive: false,
      createdDate: new Date('2025-06-12'),
      optInToDirectory: true,
      showEmailInDirectory: false
    }
  ],
  loading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => ({ ...state, loading: false })), // Prevent loading spinner from hiding mock data
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users: users.length > 0 ? users : state.users, loading: false })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false })),
  
  on(UserActions.createUserSuccess, (state, { user }) => ({ ...state, users: [...state.users, user] })),
  on(UserActions.updateUserSuccess, (state, { user }) => ({ 
    ...state, 
    users: state.users.map(u => u.id === user.id ? user : u) 
  })),
  on(UserActions.deleteUserSuccess, (state, { id }) => ({ 
    ...state, 
    users: state.users.filter(u => u.id !== id) 
  }))
);