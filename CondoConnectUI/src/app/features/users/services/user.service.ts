import { Injectable } from '@angular/core';
import { BaseApiService } from '../../../core/services/base-api.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApiService<User> {
  protected resourcePath = 'users';
}
