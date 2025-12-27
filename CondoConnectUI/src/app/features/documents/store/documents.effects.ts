import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as DocumentsActions from './documents.actions';
import { DocumentsService } from '../services/documents.service';

@Injectable()
export class DocumentsEffects {
  private actions$ = inject(Actions);
  private documentsService = inject(DocumentsService);

  loadDocuments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentsActions.loadDocuments),
      mergeMap(() =>
        this.documentsService.getAll().pipe(
          map((documents) => DocumentsActions.loadDocumentsSuccess({ documents })),
          catchError((error) => of(DocumentsActions.loadDocumentsFailure({ error })))
        )
      )
    )
  );
}
