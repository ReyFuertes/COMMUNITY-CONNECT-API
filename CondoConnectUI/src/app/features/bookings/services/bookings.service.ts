import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from '../../../core/services/base-api.service';
import { Booking } from '../models/bookings.model';
import { Observable, of } from 'rxjs';
import { BOOKINGS_DATA } from '../data/bookings.data';

@Injectable({
  providedIn: 'root'
})
export class BookingsService extends BaseApiService<Booking> {
  protected override resourcePath: string = 'bookings';

  constructor(protected override http: HttpClient) {
    super(http);
  }

  public override getAll(): Observable<Booking[]> {
    return of(BOOKINGS_DATA);
  }

  public override create(resource: Partial<Booking>): Observable<Booking> {
    const newBooking = { ...resource, id: Date.now().toString() } as Booking;
    BOOKINGS_DATA.push(newBooking);
    return of(newBooking);
  }

  public override update(id: string | number, resource: Partial<Booking>): Observable<Booking> {
    const index = BOOKINGS_DATA.findIndex(b => b.id === id);
    if (index !== -1) {
      BOOKINGS_DATA[index] = { ...BOOKINGS_DATA[index], ...resource };
      return of(BOOKINGS_DATA[index]);
    }
    return of(resource as Booking);
  }

  public override delete(id: string | number): Observable<void> {
    const initialLength = BOOKINGS_DATA.length;
    const updatedData = BOOKINGS_DATA.filter(b => b.id !== id);
    if (updatedData.length < initialLength) {
      BOOKINGS_DATA.splice(0, BOOKINGS_DATA.length, ...updatedData);
      return of(undefined);
    }
    return of(undefined);
  }
}