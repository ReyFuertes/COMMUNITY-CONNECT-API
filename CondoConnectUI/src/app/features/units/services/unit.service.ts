import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BaseApiService } from '../../../core/services/base-api.service';
import { Unit } from '../models/unit.model';
import { UNITS_DATA } from '../models/unit.data';

@Injectable({
  providedIn: 'root'
})
export class UnitService extends BaseApiService<Unit> {
  protected override resourcePath: string = 'units'; // Adjust API path as needed

  constructor(protected override http: HttpClient) {
    super(http);
  }

  public override getAll(): Observable<Unit[]> {
    return of(UNITS_DATA);
  }
}