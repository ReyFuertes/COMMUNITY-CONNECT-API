import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EngagementState } from './engagement.reducer';

export const selectEngagementState = createFeatureSelector<EngagementState>('engagement');

export const selectAllPosts = createSelector(
  selectEngagementState,
  (state) => state.posts
);

export const selectEngagementLoading = createSelector(
  selectEngagementState,
  (state) => state.loading
);

export const selectEngagementError = createSelector(
  selectEngagementState,
  (state) => state.error
);
