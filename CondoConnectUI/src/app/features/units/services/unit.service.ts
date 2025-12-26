import { Injectable } from '@angular/core';
import { BaseApiService } from '../../../core/services/base-api.service';
import { Unit } from '../models/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitService extends BaseApiService<Unit> {
  protected resourcePath = 'units';
}
