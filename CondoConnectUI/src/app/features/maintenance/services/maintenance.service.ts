import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BaseApiService } from '../../../core/services/base-api.service';
import { MaintenanceRequest } from '../models/maintenance.model';
import { MAINTENANCE_REQUESTS } from '../models/maintenance.data';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService extends BaseApiService<MaintenanceRequest> {
  protected override resourcePath: string = 'maintenanceRequests'; // Adjust API path as needed

  constructor(protected override http: HttpClient) {
    super(http);
  }

  public override getAll(): Observable<MaintenanceRequest[]> {
    return of(MAINTENANCE_REQUESTS);
  }
}