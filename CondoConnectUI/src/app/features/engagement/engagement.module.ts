import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EngagementComponent } from './components/engagement.component';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { engagementReducer } from './store/engagement.reducer';
import { EngagementEffects } from './store/engagement.effects';

@NgModule({
  declarations: [
    EngagementComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '', component: EngagementComponent }
    ]),
    StoreModule.forFeature('engagement', engagementReducer),
    EffectsModule.forFeature([EngagementEffects])
  ]
})
export class EngagementModule { }
