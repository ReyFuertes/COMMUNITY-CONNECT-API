import { createAction, props } from '@ngrx/store';
import { User, CreateUserRequest, UpdateUserRequest } from '../models/user.model';

export const loadUsers = createAction('[User/API] Load Users');
export const loadUsersSuccess = createAction('[User/API] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[User/API] Load Users Failure', props<{ error: string }>());

export const createUser = createAction('[User/API] Create User', props<{ user: CreateUserRequest }>());
export const createUserSuccess = createAction('[User/API] Create User Success', props<{ user: User }>());
export const createUserFailure = createAction('[User/API] Create User Failure', props<{ error: string }>());

export const updateUser = createAction('[User/API] Update User', props<{ user: UpdateUserRequest }>());
export const updateUserSuccess = createAction('[User/API] Update User Success', props<{ user: User }>());
export const updateUserFailure = createAction('[User/API] Update User Failure', props<{ error: string }>());

export const deleteUser = createAction('[User/API] Delete User', props<{ id: string }>());
export const deleteUserSuccess = createAction('[User/API] Delete User Success', props<{ id: string }>());
export const deleteUserFailure = createAction('[User/API] Delete User Failure', props<{ error: string }>());
