import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookingsState } from './bookings.reducer';
import { Booking } from '../models/bookings.model';

export const selectBookingsState = createFeatureSelector<BookingsState>('bookings');

export const selectAllBookings = createSelector(
  selectBookingsState,
  (state): Booking[] => state.bookings
);

export const selectBookingsLoading = createSelector(
  selectBookingsState,
  (state): boolean => state.loading
);

export const selectBookingsError = createSelector(
  selectBookingsState,
  (state): any => state.error
);

export const selectBookingsForDate = (date: Date) => createSelector(
  selectAllBookings,
  (bookings): Booking[] => bookings.filter(b =>
    b.start.getDate() === date.getDate() &&
    b.start.getMonth() === date.getMonth() &&
    b.start.getFullYear() === date.getFullYear()
  )
);
