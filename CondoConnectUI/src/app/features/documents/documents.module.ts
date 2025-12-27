import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocumentsComponent } from './components/documents.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { documentsReducer } from './store/documents.reducer';
import { DocumentsEffects } from './store/documents.effects';

@NgModule({
  declarations: [
    DocumentsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '', component: DocumentsComponent }
    ]),
    StoreModule.forFeature('documents', documentsReducer),
    EffectsModule.forFeature([DocumentsEffects])
  ]
})
export class DocumentsModule { }
