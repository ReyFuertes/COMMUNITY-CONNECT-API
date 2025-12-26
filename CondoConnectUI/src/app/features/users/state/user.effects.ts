import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUsers),
    mergeMap(() => this.userService.getAll()
      .pipe(
        map(users => UserActions.loadUsersSuccess({ users })),
        catchError(error => of(UserActions.loadUsersFailure({ error: error.message })))
      ))
    )
  );

  createUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.createUser),
    mergeMap(({ user }) => this.userService.create(user)
      .pipe(
        map(newUser => UserActions.createUserSuccess({ user: newUser })),
        catchError(error => of(UserActions.createUserFailure({ error: error.message })))
      ))
    )
  );

  updateUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.updateUser),
    mergeMap(({ user }) => this.userService.update(user.id, user)
      .pipe(
        map(updatedUser => UserActions.updateUserSuccess({ user: updatedUser })),
        catchError(error => of(UserActions.updateUserFailure({ error: error.message })))
      ))
    )
  );

  deleteUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.deleteUser),
    mergeMap(({ id }) => this.userService.delete(id)
      .pipe(
        map(() => UserActions.deleteUserSuccess({ id })),
        catchError(error => of(UserActions.deleteUserFailure({ error: error.message })))
      ))
    )
  );
}
