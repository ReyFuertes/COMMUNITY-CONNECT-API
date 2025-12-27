import { createReducer, on } from '@ngrx/store';
import * as DocumentsActions from './documents.actions';
import { Document } from '../models/documents.model';

export interface DocumentsState {
  documents: Document[];
  loading: boolean;
  error: any;
}

export const initialState: DocumentsState = {
  documents: [],
  loading: false,
  error: null,
};

export const documentsReducer = createReducer(
  initialState,

  on(DocumentsActions.loadDocuments, (state) => ({ ...state, loading: true, error: null })),
  on(DocumentsActions.loadDocumentsSuccess, (state, { documents }) => ({ ...state, documents, loading: false })),
  on(DocumentsActions.loadDocumentsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);