import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SecurityComponent } from './components/security.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { securityReducer } from './store/security.reducer';
import { SecurityEffects } from './store/security.effects';

@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '', component: SecurityComponent }
    ]),
    StoreModule.forFeature('security', securityReducer),
    EffectsModule.forFeature([SecurityEffects])
  ]
})
export class SecurityModule { }
