import { createAction, props } from '@ngrx/store';
import { Document } from '../models/documents.model';

export const loadDocuments = createAction('[Documents Page] Load Documents');

export const loadDocumentsSuccess = createAction(
  '[Documents API] Load Documents Success',
  props<{ documents: Document[] }>()
);

export const loadDocumentsFailure = createAction(
  '[Documents API] Load Documents Failure',
  props<{ error: any }>()
);
