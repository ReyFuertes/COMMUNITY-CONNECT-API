import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { createUser, createUserFailure, createUserSuccess, deleteUser, deleteUserFailure, deleteUserSuccess, loadUsers, loadUsersFailure, loadUsersSuccess, updateUser, updateUserFailure, updateUserSuccess } from '../store/user.actions';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    mergeMap(() => this.userService.getAll()
      .pipe(
        map(users => loadUsersSuccess({ users })),
        catchError(error => of(loadUsersFailure({ error: error.message })))
      ))
    )
  );

  createUser$ = createEffect(() => this.actions$.pipe(
    ofType(createUser),
    mergeMap(({ user }) => this.userService.create(user)
      .pipe(
        map(newUser => createUserSuccess({ user: newUser })),
        catchError(error => of(createUserFailure({ error: error.message })))
      ))
    )
  );

  updateUser$ = createEffect(() => this.actions$.pipe(
    ofType(updateUser),
    mergeMap(({ user }) => this.userService.update(user.id, user)
      .pipe(
        map(updatedUser => updateUserSuccess({ user: updatedUser })),
        catchError(error => of(updateUserFailure({ error: error.message })))
      ))
    )
  );

  deleteUser$ = createEffect(() => this.actions$.pipe(
    ofType(deleteUser),
    mergeMap(({ id }) => this.userService.delete(id)
      .pipe(
        map(() => deleteUserSuccess({ id })),
        catchError(error => of(deleteUserFailure({ error: error.message })))
      ))
    )
  );
}
