import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as EngagementActions from './engagement.actions';
import { EngagementService } from '../services/engagement.service';

@Injectable()
export class EngagementEffects {
  private actions$ = inject(Actions);
  private engagementService = inject(EngagementService);

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EngagementActions.loadPosts),
      mergeMap(() =>
        this.engagementService.getAll().pipe(
          map((posts) => EngagementActions.loadPostsSuccess({ posts })),
          catchError((error) => of(EngagementActions.loadPostsFailure({ error })))
        )
      )
    )
  );
}