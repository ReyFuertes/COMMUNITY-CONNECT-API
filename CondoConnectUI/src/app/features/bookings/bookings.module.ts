import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookingsComponent } from './components/bookings.component';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bookingsReducer } from './store/bookings.reducer';
import { BookingsEffects } from './store/bookings.effects';

@NgModule({
  declarations: [
    BookingsComponent
  ],
  imports: [
    CommonModule,
    DatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    TagModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    RouterModule.forChild([
      { path: '', component: BookingsComponent }
    ]),
    StoreModule.forFeature('bookings', bookingsReducer),
    EffectsModule.forFeature([BookingsEffects])
  ],
  providers: []
})
export class BookingsModule { }
