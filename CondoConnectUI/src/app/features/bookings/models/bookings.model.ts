export interface Booking {
  id: string;
  amenity: string;
  resident: string;
  start: Date;
  end: Date;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
}

export interface Resident {
  id: string;
  name: string;
  unit: string;
}