import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UnitListComponent } from './components/unit-list/unit-list.component';
import { UnitDetailComponent } from './components/unit-detail/unit-detail.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DrawerModule } from 'primeng/drawer';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { unitReducer } from './store/unit.reducer';
import { UnitEffects } from './store/unit.effects';

@NgModule({
  declarations: [
    UnitListComponent,
    UnitDetailComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TagModule,
    DrawerModule,
    SelectModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: UnitListComponent },
      { path: ':id', component: UnitDetailComponent }
    ]),
    StoreModule.forFeature('units', unitReducer),

  ]
})
export class UnitsModule { }
