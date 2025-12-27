import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FinanceComponent } from './components/finance.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { financeReducer } from './store/finance.reducer';
import { FinanceEffects } from './store/finance.effects';

@NgModule({
  declarations: [
    FinanceComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '', component: FinanceComponent }
    ]),
    StoreModule.forFeature('finance', financeReducer),
    EffectsModule.forFeature([FinanceEffects])
  ]
})
export class FinanceModule { }
