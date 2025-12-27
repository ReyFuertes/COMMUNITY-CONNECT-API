import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaintenanceComponent } from './components/maintenance.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { maintenanceReducer } from './store/maintenance.reducer';
import { MaintenanceEffects } from './store/maintenance.effects';

@NgModule({
  declarations: [
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '', component: MaintenanceComponent }
    ]),
    StoreModule.forFeature('maintenance', maintenanceReducer),
    EffectsModule.forFeature([MaintenanceEffects])
  ]
})
export class MaintenanceModule { }
