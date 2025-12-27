import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DocumentsActions from '../store/documents.actions';
import * as DocumentsSelectors from '../store/documents.selectors';
import { Observable } from 'rxjs';
import { Document } from '../models/documents.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss',
  standalone: false
})
export class DocumentsComponent implements OnInit {
  public documents$: Observable<Document[]>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(private store: Store) {
    this.documents$ = this.store.select(DocumentsSelectors.selectAllDocuments);
    this.loading$ = this.store.select(DocumentsSelectors.selectDocumentsLoading);
    this.error$ = this.store.select(DocumentsSelectors.selectDocumentsError);
  }

  public ngOnInit(): void {
    this.store.dispatch(DocumentsActions.loadDocuments());
  }
}