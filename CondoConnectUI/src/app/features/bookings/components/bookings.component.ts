import { Component, OnInit, signal, effect, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BookingsActions from '../store/bookings.actions';
import * as BookingsSelectors from '../store/bookings.selectors';
import { Observable } from 'rxjs';
import { Booking } from '../models/bookings.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss',
  standalone: false
})
export class BookingsComponent implements OnInit {
  public selectedDate = signal<Date>(new Date());
  public bookings$: Observable<Booking[]>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  public calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    selectable: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    events: [],
    contentHeight: 'auto',
    aspectRatio: 1.8
  };

  // Mock data for autocomplete
  private amenities: string[] = ['Swimming Pool', 'Fitness Center', 'Clubhouse', 'Tennis Court', 'BBQ Area', 'Function Room', 'Movie Room', 'Basketball Court'];
  private residents: string[] = ['Rey Fuertes', 'John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Williams', 'Charlie Brown', 'Diana Prince'];

  public filteredAmenities: string[] = [];
  public filteredResidents: string[] = [];

  public newBookingForm = new FormGroup({
    amenity: new FormControl('', Validators.required),
    resident: new FormControl('', Validators.required),
    start: new FormControl<Date | null>(null, Validators.required),
    end: new FormControl<Date | null>(null, Validators.required),
    status: new FormControl<'Confirmed' | 'Pending' | 'Cancelled'>('Pending', Validators.required)
  });

  private store = inject(Store);

  constructor() {
    this.bookings$ = this.store.select(BookingsSelectors.selectAllBookings);
    this.loading$ = this.store.select(BookingsSelectors.selectBookingsLoading);
    this.error$ = this.store.select(BookingsSelectors.selectBookingsError);

    // Reactively update calendar events when bookings$ changes
    this.bookings$.subscribe(bookings => {
      this.calendarOptions.events = bookings.map(b => ({
        id: b.id,
        title: `${b.amenity} - ${b.resident}`,
        start: b.start,
        end: b.end,
        extendedProps: { ...b },
        backgroundColor: this.getEventColor(b.status)
      }));
    });
  }

  public ngOnInit(): void {
    this.store.dispatch(BookingsActions.loadBookings());
  }

  public searchAmenities(event: any): void {
    this.filteredAmenities = this.amenities.filter(a => a.toLowerCase().includes(event.query.toLowerCase()));
  }

  public searchResidents(event: any): void {
    this.filteredResidents = this.residents.filter(r => r.toLowerCase().includes(event.query.toLowerCase()));
  }

  private getEventColor(status: string): string {
    switch (status) {
      case 'Confirmed': return '#50C878';
      case 'Pending': return '#F59E0B';
      case 'Cancelled': return '#EF4444';
      default: return '#6366F1';
    }
  }

  public handleDateSelect(selectInfo: any): void {
    this.selectedDate.set(selectInfo.start);
    this.newBookingForm.patchValue({
      start: selectInfo.start,
      end: selectInfo.end
    });
  }

  public handleEventClick(clickInfo: any): void {
    const booking = clickInfo.event.extendedProps as Booking;
    this.selectedDate.set(booking.start);
  }

  public getSeverity(status: 'Confirmed' | 'Pending' | 'Cancelled'): 'success' | 'warn' | 'danger' {
    switch (status) {
      case 'Confirmed': return 'success';
      case 'Pending': return 'warn';
      case 'Cancelled': return 'danger';
      default: return 'warn';
    }
  }

  public getBookingsForSelectedDate(): Observable<Booking[]> {
    return this.store.select(BookingsSelectors.selectBookingsForDate(this.selectedDate()));
  }

  public onDateSelect(event: Date): void {
    this.selectedDate.set(event);
  }

  public onSubmitNewBooking(): void {
    if (this.newBookingForm.valid) {
      const formValue = this.newBookingForm.value;
      const newBooking: Booking = {
        id: '', 
        amenity: formValue.amenity!,
        resident: formValue.resident!,
        start: formValue.start!,
        end: formValue.end!,
        status: formValue.status!
      };
      this.store.dispatch(BookingsActions.addBooking({ booking: newBooking }));
      this.newBookingForm.reset();
    }
  }
}
