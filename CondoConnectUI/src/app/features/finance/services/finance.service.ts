import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BaseApiService } from '../../../core/services/base-api.service';
import { Payment } from '../models/finance.model';
import { PAYMENTS } from '../models/finance.data';

@Injectable({
  providedIn: 'root'
})
export class FinanceService extends BaseApiService<Payment> {
  protected override resourcePath: string = 'payments'; // Adjust API path as needed

  constructor(protected override http: HttpClient) {
    super(http);
  }

  public override getAll(): Observable<Payment[]> {
    return of(PAYMENTS);
  }
}