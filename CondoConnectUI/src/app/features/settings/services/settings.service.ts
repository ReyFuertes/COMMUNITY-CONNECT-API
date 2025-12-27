import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BaseApiService } from '../../../core/services/base-api.service';
import { AppSettings } from '../models/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends BaseApiService<AppSettings> {
  protected override resourcePath: string = 'appSettings'; // Adjust API path as needed

  constructor(protected override http: HttpClient) {
    super(http);
  }

  public override getAll(): Observable<AppSettings[]> {
    // Implement actual logic to load settings
    return of([]);
  }
}