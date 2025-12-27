import { createAction, props } from '@ngrx/store';
import { Post } from '../models/engagement.model';

export const loadPosts = createAction('[Engagement Page] Load Posts');

export const loadPostsSuccess = createAction(
  '[Engagement API] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  '[Engagement API] Load Posts Failure',
  props<{ error: any }>()
);
