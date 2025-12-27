import { Booking } from '../models/bookings.model';

export const BOOKINGS_DATA: Booking[] = [
  { id: '1', amenity: 'Swimming Pool', resident: 'John Doe', start: new Date(2025, 11, 28, 10), end: new Date(2025, 11, 28, 12), status: 'Confirmed' },
  { id: '2', amenity: 'Clubhouse', resident: 'Catherine Bosse', start: new Date(2025, 11, 30, 18), end: new Date(2025, 11, 30, 22), status: 'Pending' },
  { id: '3', amenity: 'Tennis Court', resident: 'Michael Aylward', start: new Date(2025, 11, 28, 14), end: new Date(2025, 11, 28, 15), status: 'Confirmed' }
];