import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BaseApiService } from '../../../core/services/base-api.service';
import { SecurityLog } from '../models/security.model';
import { SECURITY_LOGS } from '../models/security.data';

@Injectable({
  providedIn: 'root'
})
export class SecurityService extends BaseApiService<SecurityLog> {
  protected override resourcePath: string = 'securityLogs'; // Adjust API path as needed

  constructor(protected override http: HttpClient) {
    super(http);
  }

  public override getAll(): Observable<SecurityLog[]> {
    return of(SECURITY_LOGS);
  }
}