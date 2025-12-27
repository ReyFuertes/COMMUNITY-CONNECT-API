import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './components/settings.component';
import { TabsModule } from 'primeng/tabs';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { settingsReducer } from './store/settings.reducer';
import { SettingsEffects } from './store/settings.effects';

@NgModule({
  declarations: [
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    TabsModule,
    RouterModule.forChild([
      { path: '', component: SettingsComponent }
    ]),
    StoreModule.forFeature('settings', settingsReducer),
    EffectsModule.forFeature([SettingsEffects])
  ]
})
export class SettingsModule { }
