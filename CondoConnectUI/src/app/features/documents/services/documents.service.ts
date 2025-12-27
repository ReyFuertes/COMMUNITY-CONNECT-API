import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BaseApiService } from '../../../core/services/base-api.service';
import { Document } from '../models/documents.model';
import { DOCUMENTS } from '../models/documents.data';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService extends BaseApiService<Document> {
  protected override resourcePath: string = 'documents'; // Adjust API path as needed

  constructor(protected override http: HttpClient) {
    super(http);
    // In a real app, data would come from API, here we use mock data
    // this.data = DOCUMENTS; // If using the BaseService mock data functionality
  }

  // Override or add methods if needed
  public override getAll(): Observable<Document[]> {
    return of(DOCUMENTS);
  }
}