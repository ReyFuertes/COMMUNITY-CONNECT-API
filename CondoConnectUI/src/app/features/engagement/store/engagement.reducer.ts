import { createReducer, on } from '@ngrx/store';
import * as EngagementActions from './engagement.actions';
import { Post } from '../models/engagement.model';

export interface EngagementState {
  posts: Post[];
  loading: boolean;
  error: any;
}

export const initialState: EngagementState = {
  posts: [],
  loading: false,
  error: null,
};

export const engagementReducer = createReducer(
  initialState,

  on(EngagementActions.loadPosts, (state) => ({ ...state, loading: true, error: null })),
  on(EngagementActions.loadPostsSuccess, (state, { posts }) => ({ ...state, posts, loading: false })),
  on(EngagementActions.loadPostsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
