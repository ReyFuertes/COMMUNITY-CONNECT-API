import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BaseApiService } from '../../../core/services/base-api.service';
import { User } from '../models/user.model';
import { USERS_DATA } from '../models/user.data';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApiService<User> {
  protected override resourcePath: string = 'users'; // Adjust API path as needed

  constructor(protected override http: HttpClient) {
    super(http);
  }

  public override getAll(): Observable<User[]> {
    return of(USERS_DATA);
  }
}