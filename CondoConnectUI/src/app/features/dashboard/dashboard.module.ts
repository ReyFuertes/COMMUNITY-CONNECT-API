import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ChartModule } from 'primeng/chart';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';
import { TagModule } from 'primeng/tag';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DashboardComponent } from './components/dashboard.component';
import { dashboardReducer } from './store/dashboard.reducer';
import { DashboardEffects } from './store/dashboard.effects';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    AvatarModule,
    ChartModule,
    TabsModule,
    TableModule,
    TimelineModule,
    TagModule,
    RouterModule.forChild([{
      path: '', component: DashboardComponent
    }]),
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardModule { }
