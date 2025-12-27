import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReportsComponent } from './components/reports.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reportsReducer } from './store/reports.reducer';
import { ReportsEffects } from './store/reports.effects';

@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    DatePickerModule,
    InputTextModule,
    SelectModule,
    TagModule,
    RouterModule.forChild([
      { path: '', component: ReportsComponent }
    ]),
    StoreModule.forFeature('reports', reportsReducer),
    EffectsModule.forFeature([ReportsEffects])
  ]
})
export class ReportsModule { }
