import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SupportComponent } from './components/support.component';

@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '', component: SupportComponent }
    ])
  ]
})
export class SupportModule { }
