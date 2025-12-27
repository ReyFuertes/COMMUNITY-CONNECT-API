import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'primeng/tabs';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { AccordionModule } from 'primeng/accordion';
import { TimelineModule } from 'primeng/timeline';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effects';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    AvatarModule,
    InputTextModule,
    SelectModule,
    FormsModule,
    TabsModule,
    CardModule,
    TagModule,
    AccordionModule,
    TimelineModule,
    ToggleSwitchModule,
    ConfirmDialogModule,
    RouterModule.forChild([
      { path: '', component: UserListComponent },
      { path: ':id', component: UserDetailComponent }
    ]),
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UsersModule { }
