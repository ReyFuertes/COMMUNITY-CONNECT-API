import { createAction, props } from '@ngrx/store';
import { Booking } from '../models/bookings.model';

export const loadBookings = createAction('[Bookings Page] Load Bookings');
export const loadBookingsSuccess = createAction(
  '[Bookings API] Load Bookings Success',
  props<{ bookings: Booking[] }>()
);
export const loadBookingsFailure = createAction(
  '[Bookings API] Load Bookings Failure',
  props<{ error: any }>()
);

export const addBooking = createAction(
  '[Bookings Page] Add Booking',
  props<{ booking: Booking }>()
);
export const addBookingSuccess = createAction(
  '[Bookings API] Add Booking Success',
  props<{ booking: Booking }>()
);
export const addBookingFailure = createAction(
  '[Bookings API] Add Booking Failure',
  props<{ error: any }>()
);

export const updateBooking = createAction(
  '[Bookings Page] Update Booking',
  props<{ booking: Booking }>()
);
export const updateBookingSuccess = createAction(
  '[Bookings API] Update Booking Success',
  props<{ booking: Booking }>()
);
export const updateBookingFailure = createAction(
  '[Bookings API] Update Booking Failure',
  props<{ error: any }>()
);

export const deleteBooking = createAction(
  '[Bookings Page] Delete Booking',
  props<{ bookingId: string }>()
);
export const deleteBookingSuccess = createAction(
  '[Bookings API] Delete Booking Success',
  props<{ bookingId: string }>()
);
export const deleteBookingFailure = createAction(
  '[Bookings API] Delete Booking Failure',
  props<{ error: any }>()
);
