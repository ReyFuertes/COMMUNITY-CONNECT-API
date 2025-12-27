import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BaseApiService } from '../../../core/services/base-api.service';
import { Post } from '../models/engagement.model';
import { POSTS } from '../models/engagement.data';

@Injectable({
  providedIn: 'root'
})
export class EngagementService extends BaseApiService<Post> {
  protected override resourcePath: string = 'posts'; // Adjust API path as needed

  constructor(protected override http: HttpClient) {
    super(http);
  }

  public override getAll(): Observable<Post[]> {
    return of(POSTS);
  }
}