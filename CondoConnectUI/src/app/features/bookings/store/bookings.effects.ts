import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BookingsActions from './bookings.actions';
import { BookingsService } from '../services/bookings.service';
import { Booking } from '../models/bookings.model';

@Injectable()
export class BookingsEffects {
  private actions$ = inject(Actions);
  private bookingsService = inject(BookingsService);

  public loadBookings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingsActions.loadBookings),
      mergeMap((): Observable<any> =>
        this.bookingsService.getAll().pipe(
          map((bookings: Booking[]): any => BookingsActions.loadBookingsSuccess({ bookings })),
          catchError((error: any): Observable<any> => of(BookingsActions.loadBookingsFailure({ error })))
        )
      )
    )
  );

  public addBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingsActions.addBooking),
      mergeMap(({ booking }): Observable<any> =>
        this.bookingsService.create(booking).pipe(
          map((newBooking: Booking): any => BookingsActions.addBookingSuccess({ booking: newBooking })),
          catchError((error: any): Observable<any> => of(BookingsActions.addBookingFailure({ error })))
        )
      )
    )
  );

  public updateBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingsActions.updateBooking),
      mergeMap(({ booking }): Observable<any> =>
        this.bookingsService.update(booking.id, booking).pipe(
          map((updatedBooking: Booking): any => BookingsActions.updateBookingSuccess({ booking: updatedBooking })),
          catchError((error: any): Observable<any> => of(BookingsActions.updateBookingFailure({ error })))
        )
      )
    )
  );

  public deleteBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingsActions.deleteBooking),
      mergeMap(({ bookingId }): Observable<any> =>
        this.bookingsService.delete(bookingId).pipe(
          map((): any => BookingsActions.deleteBookingSuccess({ bookingId })),
          catchError((error: any): Observable<any> => of(BookingsActions.deleteBookingFailure({ error })))
        )
      )
    )
  );
}
