import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DocumentsState } from './documents.reducer';

export const selectDocumentsState = createFeatureSelector<DocumentsState>('documents');

export const selectAllDocuments = createSelector(
  selectDocumentsState,
  (state) => state.documents
);

export const selectDocumentsLoading = createSelector(
  selectDocumentsState,
  (state) => state.loading
);

export const selectDocumentsError = createSelector(
  selectDocumentsState,
  (state) => state.error
);
