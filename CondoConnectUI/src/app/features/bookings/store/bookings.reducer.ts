import { createReducer, on } from '@ngrx/store';
import { Booking } from '../models/bookings.model';
import * as BookingsActions from './bookings.actions';

export interface BookingsState {
  bookings: Booking[];
  loading: boolean;
  error: any;
}

export const initialState: BookingsState = {
  bookings: [],
  loading: false,
  error: null,
};

export const bookingsReducer = createReducer(
  initialState,

  on(BookingsActions.loadBookings, (state) => ({ ...state, loading: true, error: null })),
  on(BookingsActions.loadBookingsSuccess, (state, { bookings }) => ({ ...state, bookings, loading: false })),
  on(BookingsActions.loadBookingsFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(BookingsActions.addBooking, (state) => ({ ...state, loading: true, error: null })),
  on(BookingsActions.addBookingSuccess, (state, { booking }) => ({ ...state, bookings: [...state.bookings, booking], loading: false })),
  on(BookingsActions.addBookingFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(BookingsActions.updateBooking, (state) => ({ ...state, loading: true, error: null })),
  on(BookingsActions.updateBookingSuccess, (state, { booking }) => ({
    ...state,
    bookings: state.bookings.map((b) => (b.id === booking.id ? booking : b)),
    loading: false,
  })),
  on(BookingsActions.updateBookingFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(BookingsActions.deleteBooking, (state) => ({ ...state, loading: true, error: null })),
  on(BookingsActions.deleteBookingSuccess, (state, { bookingId }) => ({
    ...state,
    bookings: state.bookings.filter((b) => b.id !== bookingId),
    loading: false,
  })),
  on(BookingsActions.deleteBookingFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
